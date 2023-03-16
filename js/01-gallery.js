import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
)
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

// onclick - встроєна властивість в JS, яка при наступному записі буде перезаписувати першу (краще використовувати addEventListener)
galleryRef.onclick = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  
  const origImageSrc = e.target.dataset.source;
  const origImageMarkup = `<img src='${origImageSrc}' style="width: 1400px; height: 900px;">`;

  const onEscapeClick = ({ code }) => {
    if (code === "Escape") {
      modalWithOrigImage.close();
    }
  };
  const modalWithOrigImage = basicLightbox.create(origImageMarkup, {
    onShow: () => document.addEventListener("keydown", onEscapeClick),
    onClose: () => document.removeEventListener("keydown", onEscapeClick),
  });
  
  modalWithOrigImage.show();
};