const listaElementos = document.getElementById("listaElementos");
const card = document.createElement('div');
card.setAttribute("class", "card");
listaElementos.appendChild(card);
const cardTitle = document.createElement('h1');
cardTitle.innerText = "Lista de golosinas";
card.appendChild(cardTitle);

const listContainer = document.createElement('ul');
listContainer.setAttribute("id", "listaGolosinas");
card.appendChild(listContainer);

const item = document.createElement('li');
item.innerText = 'chicle';
listContainer.appendChild(item);

const golosinas = ['alfajor', 'caramelo', 'chupetin', 'chocolate'];

golosinas.forEach((golosina) => {
    const item = document.createElement('li');
    item.innerText = golosina;
    listContainer.appendChild(item);
});

const botonEliminar = document.getElementById("botonEliminar");
botonEliminar.removeAttribute("disabled");

botonEliminar.addEventListener("click", ()=> {
    const listaGolosinas = document.getElementById("listaGolosinas");
    const ultimaGolosina = listaGolosinas.lastElementChild;
    ultimaGolosina.remove();
})