let h1 = document.createElement("h1");
h1.innerText = "Exercicio 5.2 - JavaScript DOM";
document.body.append(h1);
h1.className = "title";

let main = document.createElement("main");
main.className = "main-content"
document.body.appendChild(main);

let section = document.createElement("section");
section.className = "center-content";
document.querySelector(".main-content").appendChild(section)

let parag = document.createElement("p");
parag.innerText = "Teste de parágrafo.";
document.querySelector(".center-content").appendChild(parag)

let leftSection = document.createElement("section");
leftSection.className = "left-content";
document.querySelector("main").appendChild(leftSection);

let rightSection = document.createElement("section");
rightSection.className = "right-content";
document.querySelector("main").appendChild(rightSection);

let smallImage = document.createElement("img");
smallImage.src = "https://picsum.photos/200";
smallImage.className = "small-image";
document.querySelector(".left-content").appendChild(smallImage);

let listItem = [
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez"
]
let lista = document.createElement("ul");
document.querySelector(".right-content").appendChild(lista);
for(let index = 0; index < listItem.length; index += 1){
    let itens = listItem[index];

    let itensLista = document.createElement("li");
    itensLista.innerText = itens;
    lista.appendChild(itensLista);
}
let titles3 = [];
for(let index = 1; index < 4; index += 1){
    let h3 = document.createElement("h3");
    h3.className = "description";
    h3.innerText = index + "texto";
    document.querySelector(".main-content").appendChild(h3);
}

document.querySelector("main").removeChild(leftSection);

rightSection.style.marginRight = "auto";
