// google sheet portfolio contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxTVm2oMLTUStSpJWQDZ2fxAw38_9HpMztn0s6E9vp5d_JrVS6I1yHqXs1w2HDLRifn4g/exec'
const form = document.forms['portfolio-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
  keyboard: false
})


form.addEventListener('submit', e => {
  e.preventDefault()

  // ketika tombol kirim di klik hilangkan tombol kirim tampilkan tombol login
  btnKirim.classList.toggle('d-none');
  btnLoading.classList.toggle('d-none');
  
  // fetch data
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .finally(() => {
    // ketika proses succes, tampilkan pesan alert
    myAlert.classList.toggle('d-none');
    // ketika proses selesai tampilkan tombol kirim hilangkan tombol loading
    btnKirim.classList.toggle('d-none');
    btnLoading.classList.toggle('d-none');
    // hilangkan isi form
    form.reset(); 
  })
  .then(response => console.log('Success!', response))
  .catch(error => console.error('Error!', error.message))
})


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

  if (section.id === "contact") {
    const elementInput = section.querySelector(".element-input");
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
  const pJumbotron = document.querySelectorAll(".jumbotron span");
  pJumbotron.forEach((e) => {
    e.style.transform = `translate(0px, ${wScroll / 100}%)`;
    e.style.letterSpacing = wScroll / 400 + "px";
  });

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

function showModal(e) {
  // const textDetail = e.parentNode.querySelector('.detail').innerHTML;
  // console.log(textDetail);
  // myModal.show();
}
// [0]
