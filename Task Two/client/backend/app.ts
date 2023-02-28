// @ts-nocheck

import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import cookieParser from 'cookie-parser';

const db = new Database('db.db');

const app = express();

app.use(cookieParser());
app.use(express.cookieParser());
app.use(
    cors({
        origin: ['http://localhost:3000'],
        optionsSuccessStatus: 200,
        credentials: true
    })
)

db.exec('CREATE TABLE IF NOT EXISTS account(login, imie, nazwisko, balance, tag)');
console.log('DB CREATED!')

app.get('/api/login', async (req, res) => {
    const login: string = req.query.login;
    const password: string = req.query.password;

    const row = db.prepare("SELECT login, haslo, imie, nazwisko, tag FROM accounts WHERE login = ? AND password = ?").get(login, password);

    if (row) {
        if (row.login !== login) {
            return res.status(403).send({ msg: 'Error - niepoprawny login' });
        }
        if (row.password !== password) {
            return res.status(403).send({ msg: 'Error - niepoprawne hasło' });
        }

        const user = {
            login: login,
            haslo: password,
            imie: row.imie,
            nazwisko: row.nazwisko,
            tag: row.tag || '@brak'
        }

        return res.cookie('user', user).status(200).send({ msg: 'Zalogowano' });
    }
});


app.get('/api/balance', async (req, res) => {
    const login: string = req.query.login;
    const row = db.prepare('SELECT balance FROM accounts WHERE login = ?').get(login);
    return res.status(200).send({ msg: row.balance })
});


app.get('/api/withdraw', async (req, res) => {
    const login: string = req.query.login;
    const amount = req.query.amount || 0;
    const row = db.prepare('UPDATE accounts SET balance = balance + ? WHERE login = ?').get(amount, login);
    return res.status(200).send({ msg: row.balance })
});


app.get('/api/withdraw', async (req, res) => {
    const login: string = req.query.login;
    const amount = req.query.amount || 0;
    const bal = db.prepare('SELECT balance FROM accounts WHERE login = ?').get(login);
    if (bal < amount) return res.status(403).send({ msg: 'You dont have enough money :(' })
    const row = db.prepare('UPDATE accounts SET balance = balance - ? WHERE login = ?').get(amount, login);
    return res.status(200).send({ msg: row.balance })
});


app.listen(3001, () => {
    console.log('SERVER IS READYYY');
});