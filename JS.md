# Declaration of Variables.
> ## **Declaration of Variables: var, const and let.**
* var: global variable expresion.
* let: block variable expresion (only works inside one function or block).
* const: work as a variable but can't change its value.
```javascript
    var adressCount = adress.length;
    console.log("Tienes " + adressCount + " y te quedan " + (150 - adressCount) + " en el contador.");
```

* Muestra alerta en un pop up.
```javascript
alert("Hello World");
```
* Imprime un resultado (parecido a pintf).
```javascript
console.log("Hello world");
```
* Muestra alerta en un pop up en donde se puede introducir datos.
```javascript
prompt("Insert your data here: ");
```
* **"typeof"** nos muestra el tipo de dato de una variable.
```javascript
typeof function();
typeof variableName;
```
* Con **".length"** se le da un contador de caracteres e indica cuantos caracteres maximos se permiten.
```javascript
var adressCount = adress.length;
console.log("Tienes " + adressCount + " y te quedan " + (150 - adressCount) + " en el contador.");
```
```javascript
function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today!";
}
```
* Con **".slice(0,0)"** muestra unicamente los caracteres seleccionados. Primer # será con el que comience y segundo # el que termine.
```javascript
var names = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var male = names.slice(1,3);
console.log(male);
```
* Con **".toUpperCase()"** se cambian todas las variables a letras mayusculas (solo lo de dentro de una variable).
```javascript
var letters = "Letters and Numbers";
console.log(letters.toUpperCase());
```
___
> En operaciones:
* Incrementar x++
* Drecrementar x--
* Sumar x += y (es lo mismo que: x = x + y)
* Resta x -= y
* División x /= y
* Multiplicación x *= y
* Resto (x %= y) o (var1 % var2)
> En condicionales:
* === iqual
* !== not iqual
* && and
* || or
* ! not
___
* Para la creacion de funciones **"function name(parameter)"**.
```javascript
function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;
    console.log("You have "+ days +" days, "+ weeks +" weeks and "+ months +" months left.");
}
lifeInWeeks(23);
```
* **"Math.floor"** es utilizado para redondear al entero no importa las decimales.
```javascript
// Retorna el valor a 1
let x = Math.floor(1.6);
```
* **"Math.round"** es utilizado para redondear.
```javascript
// Retorna el valor 20
x = Math.round(20.49);
```
* **""** Produce un numero random. Genera numeros del 0 al 0.9999999 (nunca llega a 1).
```javascript
var n =  Math.random();
n = n*6;
n = Math.floor(n);
```
> ## **Arrays en JavaScript**
```javascript
var guestList = ["PS5","Nintendo","Xbox","Sega","Atari"];
console.log(guestList[2]);
// Retorna XBOX.
```
* Con **".includes"** nos retorna true o false solo si dicho objeto existe en un array.
```javascript
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// Retorna true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// Retorna true
console.log(pets.includes('at'));
// Retorna false
```
* Con **".push"** podemos introducir datos en un array.
```javascript
var output = [];
output.push(1);
//output will have 1 in its array [1].
output.push(2);
//Now, output will have 1 and 2 items in its array [1,2].
```
* Con **".pop"** podemos eliminar el ulimo dato de un array.
```javascript
var output = [];
output.push(1);
//output will have 1 in its array [1].
output.push(2);
//Now, output will have 1 and 2 items in its array [1,2].
output.pop;
//With this command will remove only the last item from the array. It will be [1] agian.
```

___
> ## **Condicional IF**
* Ejemplo
```javascript
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
```
> ## **Condicional WHILE**
* Ejemplo:
```javascript
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
```
> ## **Condicional FOR**
* Ejemplo:
```javascript
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
```
___
* La propiedad **".length"** de un objeto string nos muestra la longitud de una cadena.
```javascript
var x = 'Mozilla';
var empty = '';
console.log('Mozilla is ' + x.length + ' code units long');
/* "Mozilla is 7 code units long" */
console.log('The empty string has a length of ' + empty.length);
/* "The empty string has a length of 0" */
```

> ## **The Fibonacci Code**
```javascript
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
```
