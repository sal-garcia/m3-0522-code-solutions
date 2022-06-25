import React from "react";
import ReactDom from "react-dom/client";
import { Carousel } from "./carousel";

const images = ['https://static.wikia.nocookie.net/pokemon/images/4/49/Ash_Pikachu.png', 'https://ssb.wiki.gallery/images/thumb/b/bb/Kirby_KATFL.png/1200px-Kirby_KATFL.png', 'https://static.wikia.nocookie.net/pokemon/images/2/2a/104Cubone.png','second to last image','last image']



const element = <Carousel images={images} />
const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render (element)
