
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

//Retorna la operacion del residuio entre el money y 1.5 = 0.5
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

