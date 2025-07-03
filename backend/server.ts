import express from 'express';
import customerRoute from "./routes/customerRoute";

const app = express();
const port = 3030;

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/health', (req, res) => {
    res.status(200).send('Backend is running');
});

app.use('/customer', customerRoute);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});