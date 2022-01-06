const express = require('express');
const cors = require('cors');
const nunjucks = require('nunjucks');
const db = require("./schemas");
db();

const app = express();
const port = 2222;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("views"));

app.set("view engine", "html");
nunjucks.configure('views/html', {
  express: app,
  watch: true,
});


// 로그인 회원가입
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

// 메인페이지 

// 게시글 관련 페이지

// 상품등록 관련 페이지

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});