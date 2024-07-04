import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Mendapatkan __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Menggunakan Body Parser sebagai middleware
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Menangani submit form
app.post('/submit', (req, res) => {
    const { email, password } = req.body;
    res.send(`Email: ${email}, Password: ${password}`);
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
