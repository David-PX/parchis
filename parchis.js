var dado1 = 0;
var dado2 = 0;

//Jugador A
var turno = "A";



var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60
];




function CambiarTurno() {
    if (turno === "A")
        turno = "B";
    else
        turno = "A";
}



function TirarDados() {
    dado1 = Math.round(Math.random() * 5 + 1);
    dado2 = Math.round(Math.random() * 5 + 1);
    document.getElementById("Dado1").innerHTML = dado1;
    document.getElementById("Dado2").innerHTML = dado2;
    CambiarTurno();
}