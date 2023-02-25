import { galleryItems } from './gallery-items.js';

import "../node_modules/simplelightbox/dist/simple-lightbox.esm.js";

// import SimpleLightbox from "simplelightbox";

const imagesGallery = document.querySelector('.gallery');

const newElement = document.createElement("div");

const modalContainerElement = document.createElement('div');

const modalContentElement = document.createElement('div');

newElement.classList.add("gallery__item");

modalContainerElement.classList.add('image-modal-overlay');

modalContentElement.classList.add('image-modal');

imagesGallery.append(newElement);

imagesGallery.after(modalContainerElement);

modalContainerElement.append(modalContentElement);

const imageElements = galleryItems.reduce((acum, item) =>
{
    return (acum += `<a class='gallery__link' href='#'><img class='gallery__image' src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a>`);

}, '');

newElement.insertAdjacentHTML('beforeend', imageElements);

newElement.addEventListener('click', (event) =>
{
    if (event.target.nodeName !== 'IMG')
    {
        return;
    }
    modalContainerElement.classList.add('visible');
    
    modalContentElement.innerHTML = '';
    
    modalContentElement.insertAdjacentHTML('beforeend', `<img class='image' src='${event.target.src}' alt='${event.target.alt}'/>`);
});
document.addEventListener('keydown', (e) =>
{
    if (e.code === 'Escape')
    {
        modalContainerElement.classList.remove('visible');
    }
});