const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello, Amulya!');
} )

app.get('/api/message', (req,res) => {
    res.json({ message: 'Hello from express !'});
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});