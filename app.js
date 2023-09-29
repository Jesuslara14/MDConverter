const express = require('express');
const bodyParser = require('body-parser')
const MarkdownIt = require('markdown-it');
const fs = require('fs');
const md = new MarkdownIt();
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    const response = 'Input markdown code and see its valid HTML';
    res.render('index', {response});
});

app.post('/input', async (req, res) => {
    const response = md.render(req.body.input);
    res.render('index', {response});
});

app.listen(PORT, () => {
    console.log(`Server now live at ${PORT}`);
});

/*
const read = fs.createReadStream('File.md');
// Setting up an event listener for when data is read from the stream
read.on('data', chunk => {
    // Converting the chunk of data (text) to HTML using the MarkdownIt instance (md)
    const data = md.render(chunk.toString());


    // Creating a writable stream and writing the HTML data to 'output.html' file
    fs.createWriteStream('output.html').write(data);
});
*/
