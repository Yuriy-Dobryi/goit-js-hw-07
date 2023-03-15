import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
<a class="gallery__item" href="${original}">
  <img data-caption="${description}" class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

const galeryBox = new SimpleLightbox(".gallery a",
  {
  captionType: "data",
  captionsData: "caption",
  captionPosition: "top",
  captionDelay: 250,
  navText: ["⇦", "⇨"],
  swipeClose: false,
  animationSpeed: 500,
  docClose: false,
  disableRightClick: true,
  }
);
galeryBox.on("closed.simplelightbox", () =>
  alert(`Thank you very much for your review, Evgenia
  I really want to hear your voice`)
);


galleryRef.insertAdjacentHTML(
  "beforebegin",
  "<a target='_blank' style='color: red;' href='https://www.youtube.com/watch?v=Ryfm-7ZrL-Y'>Як обіцяв - трек, який мені дуже зайшов на українській (в лс, потім удалю)</a>"
);