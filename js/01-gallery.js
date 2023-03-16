// Gallery

import { galleryItems } from "./gallery-items.js";

import { SimpleLightbox } from "../node_modules/simplelightbox/dist/simple-lightbox.esm.js";

import "../node_modules/simplelightbox/dist/simple-lightbox.min.js";

import "../node_modules/simplelightbox/dist/simple-lightbox.css";

const gallery = document.querySelector(".gallery");

const htmlElement = document.querySelector("head");

const htmlNewOneElement = document.createElement("link");

const htmlNewTwoElement = document.createElement("link");

htmlNewOneElement.rel = 'stylesheet';

htmlNewOneElement.href = 'https://fonts.googleapis.com/css?family=Raleway:300,400,700';

htmlNewTwoElement.rel = 'stylesheet';

htmlNewTwoElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.12.1/simple-lightbox.css';

htmlElement.append(htmlNewOneElement);

htmlElement.append(htmlNewTwoElement);

const galleryList = galleryItems.map((gallery) => "<li class='gallery_item'>" +

    `<a class='gallery__link' href='${gallery.original}'>` +
    
    `<img class='gallery__image' src='${gallery.preview}' style='border: 2px solid black;' data-source='${gallery.original}' title='${gallery.description}' alt='${gallery.description}'/>` +
    
    '</a></li>').join("");

gallery.insertAdjacentHTML('beforeend', galleryList);

new SimpleLightbox(".gallery li",
{
    captionDelay: 250,
});