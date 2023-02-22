import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';

const app = express();
const db = new Database('./database.db', { verbose: console.log });

app.use(
    cors({
        credentials: true,
        optionsSuccessStatus: 200,
        origin: ['http://localhost:3000']
    })
)

app.get('/api/create', async (req: any, res: any) => {
    const title = req.query.title;
    const content = req.query.content;

    await db.prepare('INSERT INTO files(title, content) VALUES(?,?)').run(title, content);
    return res.status(200).send('OK');
});

app.get('/api/read', async (req: any, res: any) => {
    const title = req.query.title;
    const row = await db.prepare('SELECT * FROM files WHERE title = ?').run(title);
    return res.status(200).send({
        msg: row
    })
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
    console.log('ready');
})