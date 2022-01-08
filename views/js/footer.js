function setActiveTab() {
  const currentUrl = window.location.href;
  if (currentUrl.includes('main_page')) {
      console.log('home');
      const homeIcon = document.querySelector('.home-icon');
      homeIcon.classList.add('active');
  } else if (currentUrl.includes('')) {
      
  }
}