// 
let body = document.querySelector("body");

// create container <div> + append to <body>
let container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

// create <button> + append to container <div>
let button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("id", "button");
button.innerText = "Dogs!";
button.onclick = function () {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then((data) => doggieImage.src = data.message)
    .catch((error) => console.log("error"))
};
container.appendChild(button);

// create <ul> + append to container <div>
let unorderedList = document.createElement("ul");
unorderedList.setAttribute("id", "unorderedList");
unorderedList.style.listStyle = "none";
container.appendChild(unorderedList);

// create <li> + append to <ul>
let listItem = document.createElement("li");
listItem.setAttribute("id", "listItem");
unorderedList.appendChild(listItem);

// create <img> + append to <li>
let doggieImage = document.createElement("img");
doggieImage.setAttribute("id", "doggieImage");
doggieImage.setAttribute("alt", "picture of a dog");
listItem.appendChild(doggieImage);

