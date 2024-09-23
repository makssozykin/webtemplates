const scrollBox = document.querySelector(".scroll-box");
const arrow = document.querySelector(".arrow");

const calcScrollValue = () => {
  const pos = document.documentElement.scrollTop;
  //   console.log(pos);
  let heightValue =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / heightValue);
  console.log(scrollValue);

  if (pos > 100) {
    scrollBox.style.display = "grid";
    arrow.style.display = "grid";
  } else {
    scrollBox.style.display = "none";
  }
  scrollBox.addEventListener("click", () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  scrollBox.style.background = `conic-gradient(green ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
