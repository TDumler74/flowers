const flowersContainerElement =document.getElementById("flowers-container");

async function loadFlowers(){
const resolve= await fetch("https://alisherkhamidov.github.io/book-api/flowers.json");
const flowers = await resolve.json();
console.log(flowers);
flowers.forEach((flower)=>{
const { name, color, description, image, maxHeight } = flower;
const cardElement = document.createElement('div');
    cardElement.className = 'card';
 const nameElement = document.createElement('span');
    nameElement.className = 'card-element','title';
const imgElement = document.createElement('img');
    nameElement.textContent=name;
    imgElement.src=image;
    imgElement.className ='card-element';
    cardElement.append(imgElement,nameElement);
    flowersContainerElement.append(cardElement);
})

}
loadFlowers();

