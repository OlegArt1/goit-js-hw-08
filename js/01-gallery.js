// Gallery SimpleLightbox

import { galleryItems } from "./gallery-items.js";

const body = document.querySelector("body");

const head = document.querySelector("head");

const gallery = document.querySelector(".gallery");

const linkNewOneElement = document.createElement("link");

const linkNewTwoElement = document.createElement("link");

const scriptNewElement = document.createElement("script");

const scriptElement = body.lastElementChild.previousElementSibling;

const metaElement = head.firstElementChild.nextElementSibling.nextElementSibling;

gallery.style.marginTop = '40px';

gallery.style.marginLeft = '80px';

gallery.style.marginBottom = '40px';

gallery.style.listStyleType = 'none';

linkNewOneElement.rel = 'stylesheet';

linkNewTwoElement.rel = 'stylesheet';

linkNewOneElement.href = 'https://fonts.googleapis.com/css?family=Raleway:300,400,700';

linkNewTwoElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.12.1/simple-lightbox.css';

scriptNewElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.12.1/simple-lightbox.min.js';

metaElement.after(linkNewOneElement);

linkNewOneElement.after(linkNewTwoElement);

const galleryList = galleryItems.map((gallery) =>

    "<li class='gallery_item'>" +

    `<a class='gallery__link' href='${gallery.original}'>` +
    
    `<img class='gallery__image' src='${gallery.preview}' style='border: 2px solid black;' data-source='${gallery.original}' title='${gallery.description}' alt='${gallery.description}'/>` +
    
    '</a></li>').join("");

gallery.insertAdjacentHTML('beforeend', galleryList);

new SimpleLightbox(".gallery a",
{
    captionDelay: 250
});