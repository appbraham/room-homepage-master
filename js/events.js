let state = true;
let count = 0;

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");
const navBarLinks = document.querySelector(".navbar__links");

const heroImage = document.querySelector(".main__hero");
const title = document.querySelector(".shop__title");
const paragraph = document.querySelector(".shop__paragraph");

hamburger.addEventListener("click", function () {
  changeIcon(hamburger);
  showNavBar();
});

function changeIcon(icon) {
  if (state) {
    icon.setAttribute("src", "../images/icon-close.svg");
    state = !state;
  } else {
    icon.setAttribute("src", "../images/icon-hamburger.svg");
    state = !state;
  }
}

function showNavBar() {
  navBarLinks.classList.toggle("active");
  navBar.classList.toggle("active");
}

let posts = [
  [
    "We are available all across the globe",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    ["../images/mobile-image-hero-2.jpg", "../images/desktop-image-hero-2.jpg"],
  ],

  [
    "Manufactured with the best materials",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    ["../images/mobile-image-hero-3.jpg", "../images/desktop-image-hero-3.jpg"],
  ],

  [
    "Discover innovative ways to decorate",
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    ["../images/mobile-image-hero-1.jpg", "../images/desktop-image-hero-1.jpg"],
  ],
];

function prevSlide() {
  showSlide();
  --count;
}

function nextSlide() {
  showSlide();
  ++count;
}

function showSlide() {
  if (count > posts.length - 1) {
    count = 0;
  }
  if (count < 0) {
    count = posts.length - 1;
  }

  title.textContent = posts[count][0];
  paragraph.textContent = posts[count][1];

  if (screen.width < 376) {
    heroImage.style.backgroundImage = `url(${posts[count][2][0]})`;
  }else{
    heroImage.style.backgroundImage = `url(${posts[count][2][1]})`;
  }
}
