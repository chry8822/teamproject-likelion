function renderPost(d) {
  const { nickname, profileImg, postImage, postContent, date } = d;
  return `
    <section class="conts">
      <h1 class="ir">피드 컨텐츠</h1>
      <article class="conts-feed">
        <h2 class="ir">피드</h2>
        <header class="feed-header">
          <div class="profile-img-wrap">
            <img class="feed-profile-img" src="${profileImg}" alt="프로필 사진" />
            <a class="feed-title" type="button">
                <h3>${nickname}</h3>
                <span class="feed-profile-id">@ weniv_Mandarin</span>
            </a>
          </div>
          <button class="feed-more-btn" type="button">
            <img class="more-img" src="./images/icon/icon-more-vertical.png" alt="더보기버튼" />
          </button>
        </header>
        <section class="feed-cont">
            <p class="feed-text">
              ${postContent}
            </p>
            <a class="feed-img-link" type="button">
              <img class="feed-img" src="${postImage}" alt="피드 이미지" />
            </a>
        </section>
        <footer class="cont-footer">
          <div class="feed-btn-wrap">
              <button class="like-btn">
                <img src="./images/icon/icon-heart.png" alt="좋아요버튼" />
              </button>
              <button class="reply-btn">
                <img src="./images/icon/icon-message-circle.png" alt="댓글버튼" />
              </button>
              <div class="like-count">58</div>
              <div class="reply-count">12</div>
          </div>
          <div class="feed-date">${date}</div>
        </footer>
      </article>
    </section>
  `;
}
