import express from 'express';
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: ['http://localhost:3000'],
        optionsSuccessStatus: 200,
        credentials: true
    })
)

app.get('/api/login',)