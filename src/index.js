const path = require('path');
const express = require('express');
const morgan = require('morgan') ;
const hbs  = require('express-handlebars');
const app = express() ;
const port = 8000;

//connect to sever

 
// Use static folder
app.use(express.static(path.join(__dirname, 'public')));
//Template Engine

app.engine('hbs',hbs.engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

// HTTP logger
 app.use(morgan('combined'));
//  console.log(__dirname);
//  console.log('PATH: ' + path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/', (req, res) => { res.render('news') });

//init

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`)
})  

