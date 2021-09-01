const express = require('express')
const app = express();

app.use(express.static('public/views'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/views/home.html'));
app.get('/history', (req, res) => res.sendFile(__dirname + '/public/views/history.html'));
app.get('/about', (req, res) => res.sendFile(__dirname + '/public/views/about.html'));

app.listen(3000, () => console.log('My first app listening on port 3000!'));
