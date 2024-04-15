//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import { data } from './data'

for(let d of data){
    let d_thumb = document.getElementById("m" + d.id);
    d_thumb.innerHTML = `
        <img src="${d.poster}" alt="${d.title}" class="img-thumbnail"/>
    `

    d_thumb.onclick = function(){
        displayPicture(d)
    }
}

let featured_picture = document.querySelector(".featured")
function displayPicture(data){
    featured_picture.innerHTML = `
    <div class="card">
    <img src="${data.poster}" class="card-img-top" alt="${data.title}">
    <div class="card-body">
      <h5 class="card-title">${data.title}</h5>
      <p class="card-text">${data.description}</p>
    </div>
  </div>
    `
}