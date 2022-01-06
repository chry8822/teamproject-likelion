const express = require('express');
const Http = require('http');
const cors = require('cors');
const nunjucks = require('nunjucks');

const app = express();
const port = 2222;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("views"));

app.set("view engine", "html");
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true,
});

app.get('/', (req, res) => {
  res.render('randing_page');
})

app.get('/login_page', (req, res) => {
  res.render('login_page');
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/signup', (req, res) => {
  res.render('signup');
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});