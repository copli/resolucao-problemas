// Se o número for par, escreva "par" e o número correspondente.
// Se o número for ímpar, escreva "ímpar" e o número correspondente.
// Se o número for zero, escreva "zero" e o número correspondente.

let listaAlunos = ["Carlos", "Rosana", "Juliana", "Olavo", "Claudia", "Joana"];

for (contador = 0;  contador < listaAlunos.length; contador++) {
    if (contador == 0) {
        console.log(contador + " zero - " + listaAlunos[0]);
    } else if (contador % 2) {
        console.log(contador + " ímpar - " + listaAlunos[contador]);
    } else {
        console.log (contador + " par - " + listaAlunos[contador]);
    }
}
