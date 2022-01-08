function renderProfile(data) {
  const {profileImg, nickname, userId} = data;
  return `
  <section class="conts">
    <h1 class="ir">사용자 프로필</h1>
    <article class="conts-feed">
      <h2 class="ir">프로필</h2>
      <header class="feed-header">
        <div class="profile-img-wrap">
          <img class="feed-profile-img" src="${profileImg}" alt="프로필 사진" />
          <a class="feed-title" type="button">
              <h3>${nickname}</h3>
              <span class="feed-profile-id">@ ${userId}</span>
          </a>
        </div>
      </header>
    </article>
  </section>
  `
}