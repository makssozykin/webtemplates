const scrollToTop = document.getElementById("scrollToTop");

scrollToTop.addEventListener("click", onClick);
scrollToTop.style.display = "none";
function onClick() {
  window.scrollTo(0, 0);
}
const hiddenBtnScroll = () => {
  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 200) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
};
window.onscroll = hiddenBtnScroll;
