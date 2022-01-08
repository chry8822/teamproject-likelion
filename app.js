const express = require("express");
const cors = require("cors");
const nunjucks = require("nunjucks");
// const { Aggregate } = require('mongoose');
// const db = require("./schemas");
// db();

// 더미 데이터 임포트, 피드 더미, 검색결과 프로필 더미.
const { dummyPostsData, dummyProfileData } = require('./dummy');

const app = express();
const port = 2222;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("views"));

app.set("view engine", "html");
nunjucks.configure("views/html", {
  express: app,
  watch: true,
});

// 로그인 회원가입
app.get("/", (req, res) => {
  res.render("randing_page");
});

app.get("/login_page", (req, res) => {
  res.render("login_page");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/main_page", (req, res) => {
  res.render("main_page");
});

app.get("/main_search", (req, res) => {
  res.render("main_search");
});

app.get("/search_page", (req, res) => {
  res.render("search_page");
});

/**
 * 오국화: 테스트용 더미 API (피드 조회)
 */
app.get("/getPosts", (req, res) => {
  const { page } = req.query;

  res.json({
    data: dummyPostsData,
    page,
  });
  res.end();
});

/**
 * 오국화: 테스트용 더미 API (유저 검색 조회)
 */
app.get("/searchUser", (req, res) => {
  const { search } = req.query;

  const randomResult = parseInt(Math.random() * 10) + 1;
  let result = new Array(randomResult).fill(dummyProfileData);

  res.json({
    data: result,
  })

  res.end(); // 요청에 대한 응답을 마침
})
// 메인페이지

// 게시글 관련 페이지

// 상품등록 관련 페이지

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
