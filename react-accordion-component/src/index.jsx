import React from "react";
import ReactDOM from "react-dom/client";
import { Accordion } from "./accordion";

const topics = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    description: 'HTML ipsum, dolor sit amet consectetur adipisicing elit. Illum asperiores vel sint corrupti debitis delectus quis, reiciendis libero? Magnam officiis voluptates dolor omnis aspernatur molestiae perferendis iusto facere est repudiandae.'
  },
  {
    id: 2,
    title: 'Cascading Style Sheets',
    description: 'CSS ipsum, dolor sit amet consectetur adipisicing elit. Illum asperiores vel sint corrupti debitis delectus quis, reiciendis libero? Magnam officiis voluptates dolor omnis aspernatur molestiae perferendis iusto facere est repudiandae.'
  },
  {
    id: 3,
    title: 'JavaScript',
    description: 'JavaScript ipsum, dolor sit amet consectetur adipisicing elit. Illum asperiores vel sint corrupti debitis delectus quis, reiciendis libero? Magnam officiis voluptates dolor omnis aspernatur molestiae perferendis iusto facere est repudiandae.'
  }
];


const element = <Accordion topics={topics} />
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
