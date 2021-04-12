// function for resize brand
function actionBrandonScroll(brand, scroll) {
  if (scroll <= 0) {
    brand.classList.remove("resize");
  } else {
    brand.classList.add("resize");
  }
}

// function animate section
function sectionOnScroll(sections, scroll) {
  for (const [i, section] of sections.entries()) {
    if (i > 0) {
      const title = section.querySelector(".title");
      if (scroll > section.offsetTop - 80) {
        // resize title
        title.classList.add("resize");
        // animate section on scroll
        animateSection(section);
      } else {
        // resize title
        title.classList.remove("resize");
      }
    }
  }
}

function animateSection(section) {
  if (section.id === "about") {
    const imgProfile = section.querySelector(".img-profile");
    const textAbout = section.querySelectorAll(".text-about");

    // imgProfile
    imgProfile.classList.add("muncul");

    // textAbout
    for (const text of textAbout) {
      text.classList.add("muncul");
    }
  }

  if (section.id === "skills" || section.id === "projects") {
    const contents = section.querySelectorAll(".img-animate");
    for (const [i, content] of contents.entries()) {
      setTimeout(() => {
        content.classList.add("muncul");
      }, 500 * i);
    }
  }
}

function returnTop(btnTop, scroll) {
  if (scroll > 200) {
    btnTop.classList.add("muncul");
  } else if (scroll < 200) {
    btnTop.classList.remove("muncul");
  }
}

// event on scroll
window.addEventListener("scroll", function () {
  const wScroll = this.scrollY;

  // brand
  const eBrand = document.querySelector(".navbar-brand");
  actionBrandonScroll(eBrand, wScroll);

  // event for element in jumbotron
  // img
  const imgJumbotron = document.querySelector(".jumbotron img");
  imgJumbotron.style.transform = `translate(-${wScroll / 100}%, 0px)`;

  // H1
  const titleJumbotron = document.querySelector(".jumbotron h1");
  titleJumbotron.style.transform = `translate(0px, ${wScroll / 100}%)`;
  titleJumbotron.style.letterSpacing = wScroll / 160 + "px";

  // paragraph
  const pJumbotron = document.querySelector(".jumbotron p");
  pJumbotron.style.transform = `translate(0px, ${wScroll / 100}%)`;
  pJumbotron.style.letterSpacing = wScroll / 400 + "px";

  // a
  const aJumbotron = document.querySelector(".btn-contactMe");
  aJumbotron.style.letterSpacing = wScroll / 150 + 3 + "px";

  // section
  const sectionEL = document.querySelectorAll("section");
  sectionOnScroll(sectionEL, wScroll);

  // return to top
  const btnTop = document.querySelector(".top a");
  returnTop(btnTop, wScroll);
});
