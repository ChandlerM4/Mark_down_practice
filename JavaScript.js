
var dogAge = prompt("La edad de su perro")

var humanAge = ((dogAge - 2) * 4) + 21

alert("La edad verdadera de su mascota es de " + humanAge)

_________________________________________________________________________

function getMoney(money) {

    console.log("Give me money");
    console.log("Give me money");
    console.log("Give me money");
    console.log("Give me money");

    var numberOfMoney = (money / 1.5);

    console.log("buy " + numberOfMoney + " money xd.");

    console.log("Give me money");
    console.log("Give me money");
    console.log("Give me money");
    console.log("Give me money");
    
}

getMoney(2);
_________________________________________________________________________

function lifeInWeeks(age) {

var yearsRemaining = 90 - age;
var days = yearsRemaining * 365;
var weeks = yearsRemaining * 52;
var months = yearsRemaining * 12;

console.log("You have "+ days +" days, "+ weeks +" weeks and "+ months +" months left.");

}
_________________________________________________________________________

function getMilk(money) {
    console.log("leaveHouse");
    console.log("movieRight");
    console.log("movieRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("movieRight");
    console.log("movieRight");

    var numBottles = money / 1.5;
    alert("buy "+numBottles+" bottles of milk");

    console.log("movieLeft");
    console.log("movieLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("movieLeft");
    console.log("movieLeft");
    console.log("enterHouse");
    return money % 1.5;
}
var change = getMilk(5);

alert(change);
_________________________________________________________________________

function getMilk(money) { //Primera funcion

    console.log("leaveHouse");
    console.log("movieRight");
    console.log("movieRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("movieRight");
    console.log("movieRight");

//Manda a llamar a la segunda funcion la cual sus variables toman los valores de la primera funcion (money, 1.5)

    console.log("buy "+ calcBottles(money, 1.5) +" bottles of milk"); //esta funcion regresa con la operacion "X", y muestra ese resultado
    
    console.log("movieLeft");
    console.log("movieLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("movieLeft");
    console.log("movieLeft");
    console.log("enterHouse");

//Retorna la operacion del residuio entre la variable money y 1.5 = 0.5
    return money % 1.5; //Return solo devuelve el valor pero no lo muestra, necesita de una variable que muestre la funcion

}

function calcBottles(startingMoney, costPerBottle) { //Segunda funcion
    var numberOfBottles = Math.floor(startingMoney / costPerBottle); //Se declara una variable con esta operacion "X"
        return numberOfBottles; //Este retorna la variable con su valor

}

getMilk(5); //Se ejecuta la primera funcion con el valor ingresado, en este caso valor de (5)
_________________________________________________________________________
function getMilk(money) { //Primera funcion

    console.log("leaveHouse");
    console.log("movieRight");
    console.log("movieRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("movieRight");
    console.log("movieRight");

//Manda a llamar a la segunda funcion la cual sus variables toman los valores de la primera funcion (money, 1.5)

    console.log("buy "+ calcBottles(money, 1.5) +" bottles of milk"); //esta funcion regresa con la operacion "X", y muestra ese resultado
    
    console.log("movieLeft");
    console.log("movieLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("movieLeft");
    console.log("movieLeft");
    console.log("enterHouse");

//Retorna la operacion del residuio entre el money y 1.5 = 0.5
    return change(money, 1.5); //Return solo devuelve el valor pero no lo muestra, necesita de una variable que muestre la funcion

}

function calcBottles(startingMoney, costPerBottle) { //Segunda funcion
    var numberOfBottles = Math.floor(startingMoney / costPerBottle); //Se declara una variable con esta operacion "X"
        return numberOfBottles; //Este retorna la variable con su valor

}

function calcChanges(startingMoney, costPerBottle) {
    var change = startingMoney % costPerBottle;
    return change;
}

console.log("Hey master, here is your " + getMilk(5) + " change."); //Se ejecuta la primera funcion con el valor ingresado, en este caso valor de (5)
_________________________________________________________________________

function bmiCalculator(weight, height) //Aqui se implementan los inputs. En estas variables se almacenaran los valores que se ingresaran.
{

    var bmi = weight / (height * height);
    // var bmi = weight / Math.pow(height, 2); Aqui se utiliza Math.pow para poder subir a la potencia un numero.
    return Math.round(bmi);

}

    var bmi = bmiCalculator(65, 1.8);
    console.log(bmi);
_________________________________________________________________________

function bmiCalculator (weight, height) {
    
    var BMI = Math.round(weight / (height * height));
    var interpretation;
    
    if(BMI < 18.5)
    {
        interpretation = "Your BMI is " + BMI + ", so you are underweight.";
    }
    if(BMI >= 18.5 && BMI < 24.9)
    {
        interpretation = "Your BMI is " + BMI + ", so you have a normal weight.";
    }
    if(BMI > 24.9)
    {
        interpretation = "Your BMI is " + BMI + ", so you are overweight.";
    }
    
    return interpretation;
}
_________________________________________________________________________

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
_________________________________________________________________________

function isLeap(year)
{
    if(year % 4 === 0)
    {
        if(year % 100 === 0)
        {
            if(year % 400 === 0)
            {
                return "Leap year.";
            }
            else
            {
                return "Not leap year.";
            }
        }
        elses
        {
            return "Leap year.";
        }
    }
    else
    {
        return "Not leap year.";
    }
}
_________________________________________________________________________

//Arrays on JavaScript

var guestList = ["PS5","Nintendo","Xbox","Sega","Atari"];

console.log(guestList[2]);

//variable.includes: this command return only a boolean as false or true only.

_________________________________________________________________________

var guestList = ["PS5","Nintendo","Xbox","Sega","Atari"];

var guestGame = prompt("What kind of game console do you like?");

if(guestList.includes(guestGame))
{
    alert("Hi and Welcome.");
}
else
{
    alert("Sorry, maybe next time");
}
_________________________________________________________________________

//Program that print the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz".
//For numbers which are multiples of both three and five print "FizzBuzz".

var output = [];
output.push(1);
//output will have 1 in its array [1].
output.push(2);
//Now, output will have 1 and 2 items in its array [1,2].
output.pop;
//With this command will remove only the last item from the array. It will be [1] agian.

_________________________________________________________________________

var output = [];
var count = 1;

function fizzBuzz() {

    if(count % 3 === 0 && count % 5 === 0)
    {
        output.push("FizzBuzz");
    }
    else if(count % 3 === 0)
    {
        output.push("Fizz");
    }
    else if(count % 5 === 0)
    {
        output.push("Buzz");
    }
    else
    {
        output.push(count);
    }

    count++;
    console.log(output);
    
}
_________________________________________________________________________
//array --> variable.push(number): this command add a new item in the array.
//array --> variable.pop: this command remove the last item in the array.

function whosPaying(names) {
    
    var nombreOfPeople = names.length;

    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);

    var randomPerson = names[randomPersonPosition];


    return randomPerson + " is going to buy lunch today!";
    
}
_________________________________________________________________________

var i = 1;

while(i < 2)
{
    console.log(i);
    i++;
}
_________________________________________________________________________

var output = [];
var count = 1;


function fizzBuzz() {

    while(count <= 100){

    if(count % 3 === 0 && count % 5 === 0)
    {
        output.push("FizzBuzz");
    }
    else if(count % 3 === 0)
    {
        output.push("Fizz");
    }
    else if(count % 5 === 0)
    {
        output.push("Buzz");
    }
    else
    {
        output.push(count);
    }
        
    count++;
}
    console.log(output);
    
}
_________________________________________________________________________

var numberOfBottlesOfBeer = 99 //El numero de cervezas las cuales iran disminuyendo.

while (numberOfBottlesOfBeer >= 1) //Condicion: si el numero de cervezas es mayor o igual a 0.
{
    var bottleWord;
    if (numberOfBottlesOfBeer === 1) 
    {
        bottleWord = "bottle";
    }
    else
    {
        bottleWord = "bottles";
    }
    console.log(numberOfBottlesOfBeer + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottlesOfBeer + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around, no more bottles of beer on the wall.");
    console.log(numberOfBottlesOfBeer + " " + bottleWord + " of beer on the wall.");

    numberOfBottlesOfBeer--; //La variable ira disminuyendo de 1 en 1.
}
_________________________________________________________________________

var output = [];

function fizzBuzz() {

    for(var count = 1; count < 101; count++){

    if(count % 3 === 0 && count % 5 === 0)
    {
        output.push("FizzBuzz");
    }
    else if(count % 3 === 0)
    {
        output.push("Fizz");
    }
    else if(count % 5 === 0)
    {
        output.push("Buzz");
    }
    else
    {
        output.push(count);
    }
}
    console.log(output);    
}
_________________________________________________________________________

//The Fibonacci Code

function fibonacciGeneretor(n)
{
    var arra = [];
    if(n === 1)
    {
        arra = [0]; //solo lo agregara con esta condicion.
    }
    else if(n === 2)
    {
        arra = [0,1]; //solo lo agregara con esta condicion.
    }
    else 
    {
        arra = [0,1]; //solo lo agregara con esta condicion.
        for(var i = 2; i < n; i++) //i se le da con valor a 2 por que son los 2 datos dentro del array.
        {
            //se suman las posiciones anteriores y se agrega con un push un tercero.
            arra.push(arra[arra.length - 2] + arra[arra.length - 1]);
        }
    }

    return arra;
}
//este para ejecutar con valor inicial.
arra = fibonacciGeneretor(1);
console.log(arra);