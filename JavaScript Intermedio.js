//JS Intermed level. Randomisation and Control Flow.

var n =  Math.random(); //Produce un numero random. Genera numeros del 0 al 0.9999999 (nunca llega a 1).

n = n*6;

n = Math.floor(n); //Redondea el numero.
____________________________________________________________________________________________________________
//Love Calculator

prompt("Give me your name: ");

prompt("Give me your crush name: ");

var num = Math.random();

var resul = Math.floor((num) * 100);

alert("You lovescore is " + resul + "%");

// console.log("You have a " + resul + "% of match.");

____________________________________________________________________________________________________________
//Love Calculator modified

//In conditionals:
//=== iqual
//!== not iqual
//&& and
//|| or
//! not

prompt("Give me your name: ");

prompt("Give me your crush name: ");

var num = Math.random();

var resul = Math.floor((num) * 100);


if (resul === 100)
{
    alert("You lovescore is " + resul + "%. She/He loves you a lot.");
}
else
{
    alert("You lovescore is " + resul + "%. She/He dosen't love you and please kill yourself.");
}


