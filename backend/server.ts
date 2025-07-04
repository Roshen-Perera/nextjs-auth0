import express from 'express';
import customerRoute from "./routes/customerRoute";
import cors from 'cors';

const app = express();
const port = 3030;

app.use(express.json()); // for parsing application/json

app.use(cors({
    origin: "http://localhost:3000",  // Allow frontend requests
    methods: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    credentials: true
}));

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