let dataAtual = new Date(2022, 7, 15)
let dataEvento = new Date(2022, 9, 10)
let listaParticipantes = ["Carlos", "Rosana", "Juliana", "Olavo", "Claudia", "Joana"]
let IdadeParticipante = 20
let numeroParticipantes = 0

if (dataEvento > dataAtual) {
    console.log("Evento agendado")
    } else {
    console.log("Evento não agendado. Data inválida.")
}
console.log("-------------------------------------")

if (IdadeParticipante >= 18) {
    console.log("Idade válida. Entrada permitida.")
}
else { console.log("Idade inválida. Entrada não permitida") }
console.log("-------------------------------------")

console.log(listaParticipantes)
console.log("-------------------------------------")

if (listaParticipantes.length < 100) {
    console.log("Cadastro permitido")
}
else { console.log("Numero de participantes excedido") }