//
let body = document.querySelector("body");

// create container <div>
let container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

// fetch API response + log data to console + display image
fetch(`https://xkcd.now.sh/?comic=latest`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    funnyImage.src = data.img;
  })
  .catch((error) => console.log("error"));

// create <img> + append to container <li>
let funnyImage = document.createElement("img");
funnyImage.setAttribute("id", "funnyImage");
funnyImage.setAttribute("alt", "funny programming cartoon");
container.appendChild(funnyImage);


