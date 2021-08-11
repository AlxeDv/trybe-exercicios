let h1 = document.createElement("h1");
h1.innerText = "Exercicio 5.2 - JavaScript DOM";
document.body.append(h1);

let main = document.createElement("main");
main.className = "main-content"
document.body.appendChild(main);

let section = document.createElement("section");
section.className = "center-content";
document.querySelector(".main-content").appendChild(section)

let parag = document.createElement("p");
parag.innerText = "Teste de parágrafo.";
document.querySelector(".center-content").appendChild(parag)

