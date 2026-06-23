
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('show'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('show')));

const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('[data-lightbox]').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('show');
    document.body.classList.add('lock');
  });
});

function closeLightbox(){
  lightbox.classList.remove('show');
  document.body.classList.remove('lock');
}
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if(e.target === lightbox) closeLightbox();
});
// 포인트 이미지 클릭 시 크게 보기
document.addEventListener("DOMContentLoaded", function () {
  const pointImages = document.querySelectorAll(".lightbox-trigger");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox img");
  const closeBtn = document.querySelector(".lightbox .close");

  if (!pointImages.length || !lightbox || !lightboxImg) return;

  pointImages.forEach(function (img) {
    img.style.cursor = "pointer";

    img.addEventListener("click", function () {
      lightbox.classList.add("show");
      lightboxImg.src = img.getAttribute("src");
      lightboxImg.alt = img.getAttribute("alt");
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      lightbox.classList.remove("show");
      lightboxImg.src = "";
    });
  }

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
      lightboxImg.src = "";
    }
  });
});