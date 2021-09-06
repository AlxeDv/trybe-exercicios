let estados = ["Acre", "Alagoas", "Amazonas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goías", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraíma", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

let inputSelect = document.getElementById("input-select")
for(let index = 0; index < estados.length; index += 1){
  let estado = document.createElement("option")
  estado.innerText = estados[index]
  inputSelect.appendChild(estado)
}