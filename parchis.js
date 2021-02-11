var dado1 = 0;
var dado2 = 0;
var turno;

//Jugador A




var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,

];




function CambiarTurno() {

    if (turno === "A") {
        turno = "B";
    } else {
        turno = "A";
    }
    return turno;
}

function MoverFicha(ficha, posicion) {

    var PuedeMover = false;

    if (turno === "A") {
        console.log(ficha.value);
        var ficha1 = document.getElementById(ficha);
        let espacio = document.getElementById(posicion);
        espacio.appendChild(ficha1);
        console.log(espacio.childNodes);

    } else {
        console.log(espacio.childNodes);


    }


}





function TirarDados() {
    dado1 = Math.round(Math.random() * 5 + 1);
    dado2 = Math.round(Math.random() * 5 + 1);
    let diceOne = "Images/" + dado1 + ".jpg";
    document.querySelector('.img1').setAttribute('src', diceOne)
    let diceTwo = "Images/" + dado2 + ".jpg";
    document.querySelector('.img2').setAttribute('src', diceTwo)
    let turnoSiguiente = CambiarTurno();
    console.log(dado1 + dado2);

    if (turno === "A") {
        if (dado1 + dado2 === 5 || dado1 === 5 || dado2 === 5) {
            MoverFicha("FICHAa1", dado1 + dado2);


        } else if (dado1 == 5 && dado2 == 5) {
            MoverFicha("FICHAa1", dado1 + dado2);
            MoverFicha("FICHAa2", dado1 + dado2);


        } else if (dado1 == 5) {
            MoverFicha("FICHAa1", dado1 + dado2);

        } else if (dado2 == 2) {

            MoverFicha("FICHAa1", dado1 + dado2);

        }
    } else {
        //if (dado1 === 5 || dado2 === 5) {
        MoverFicha("FICHAr1", dado1 + dado2);

        //}
    }
    console.log(turnoSiguiente);


} {



}