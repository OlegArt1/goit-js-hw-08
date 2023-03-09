// Gallery

import { galleryItems } from "./gallery-items.js";

import { SimpleLightbox } from "../simplelightbox/dist/simple-lightbox.min.js";

import "../simplelightbox/dist/simple-lightbox.css";

const gallery = document.querySelector(".gallery");

const galleryList = galleryItems.map((gallery) => "<li class='gallery_item'>" +

    `<a class='gallery__link' href='${gallery.original}'>` +
    
    `<img class='gallery__image' src='${gallery.preview}' style='border: 2px solid black;' data-source='${gallery.original}' title='${gallery.description}' alt='${gallery.description}'/>` +
    
    '</a></li>').join("");

gallery.insertAdjacentHTML('beforeend', galleryList);

new SimpleLightbox(".gallery a",
{
    captionDelay: 250,
});