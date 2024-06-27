import express, { Request, Response } from 'express';
import path from 'path';
import RootRouter from "./routes/Root"

const app = express();
const port = process.env.PORT;


app.use(express.static(path.join(__dirname, '.', 'public')));

app.use('/root', RootRouter);


app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '.', 'public', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});