// @ts-nocheck
// @ts-ignore
const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('./database.db', {verbose: console.log});

app.use(
    cors({
        credentials: true,
        optionsSuccessStatus: 200,
        origin: ['http://localhost:3000']
    })
)

db.exec("CREATE TABLE IF NOT EXISTS files('title' varchar, 'content' varchar);");
console.log('Database created!')

app.get('/api/create', async (req: any, res: any) => {
    const title = req.query.title;
    const content = req.query.content;

    await db.prepare('INSERT INTO files(title, content) VALUES(?,?)').run(title, content);
    return res.status(200).send('OK');
});

app.get('/api/read', async (req: any, res: any) => {
    const title = req.query.title;
    const row = await db.prepare('SELECT * FROM files WHERE title = ?').get(title);
    return res.status(200).send({
        msg: row,
    })
});

app.get('/api/all', async (req: any, res: any) => {
    const row = db.prepare('SELECT * FROM files').all()
    return res.status(200).send({
        msg: row
    });
});

app.get('/api/delete', async (req: any, res: any) => {
    const title = req.query.title;
    await db.prepare('DELETE FROM files WHERE title = ?').run(title);
    return res.status(200).send('OK');
});

app.get('/api/update', async (req: any, res: any) => {
    const title = req.query.title;
    const content = req.query.content;
    await db.prepare('UPDATE files SET content = ? WHERE title = ?').run(content, title);
    return res.status(200).send('OK');
});

app.listen(3001, () => {
    console.log('Ready on port 3001');
})