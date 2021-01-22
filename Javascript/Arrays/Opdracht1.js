// Opdracht 1:
// Maak een array met 10 getallen die willekeurig in een array staan. Print de array uit in jouw
// console.


let getallen = [1,2,3,4,5,6,7,8,9,10];
console.log(getallen);


// Opdracht 2:
// Maak een array met 5 verschillende fruitsoorten. Print de array uit in jouw console.

let Fruits = ["Mango","Kiwi","Ananas","Aardbei" ,"Kersen"];
console.log(Fruits);

// Opdracht 3:
// Op welke index staat “Appel”. Gebruik de index waarde om “Appel” in jouw console uit te
// printen. 
// Antwoord : De index staat voor de plek , let op index begint altijd bij 0, dus Mango staat op index 0
// en Kiwi is index 1 enz.


console.log(Fruits[1]);

// Opdracht 4:
// Op welke index staat “Aardbei”. Gebruik de index waarde om “Aardbei” in jouw console uit te
// printen.
// Antwoord : De index aardbei is 4.


console.log(Fruits[3]);

// Opdracht 5:
// We gaan het iets complexer maken met het bepalen van de fruit. Er zijn nu 2 arrays
// gedefinieerd, namelijk een array met getallen en een array met fruitsoorten. De eerste array
// bepaalt welke fruitsoort er geprint moet worden. Gebruik de Math.random() methode om te
// bepalen welke waarde uit de eerste array wordt gehaald. Vervolgens kun je de waarde
// gebruiken als index en de fruitsoort printen in jouw console. Helaas, de getallen 5 t/m 10 uit
// de eerste array zullen een undefined teruggeven als je dat als index bij de fruit array zal
// gebruiken. Hiervoor kun je de modulo (%) gebruiken. Zoek uit hoe modulo werkt en pas dat
// toe aan de waarde van de eerste array. Als resultaat zal er altijd een fruitsoort uitgeprint
// worden.
// Remainder/modulo is eigenlijk letterlijk de restwaarde.Voorbeeld: 19%6 = restwaarde 1 


//  const Fruits = () => {
    //  let Fruits = ["Mango","Kiwi","Ananas","Aardbei" ,"Kersen"];
//  let Fruits = fruity[Math.round(Math.random() * 5)];
// console.log (Fruits [Math.round(Math.random() * 5)]);
//  console.log(Fruits(Math.round(Math.random()* 5)));

//  }


let random = getallen[Math.round(Math.random() * 10)];
const uitkomst =random % 5;
 console.log(uitkomst);
let fruitArray = Fruits[uitkomst];
console.log (fruitArray);

// je moet proberen wat bij raNDOM UITKOMT IN EEN MODULO STOPPEN...(Er kwam 8 uit)
// HET ANTWOORD VAN MODULO MOET IN DE FRUIT ARRAY KOMEN (Dit werd een 3) -HET WORDT EEN INDEX
// KOPPELEN 
// CONSOLE LOG VOOR RESULTAAT

// let Fruits = ["Mango","Kiwi","Ananas","Aardbei" ,"Kersen"];

// Opdracht 6:
// Je hebt nu geleerd hoe je arrays kunt aanmaken en de waarde kunt benaderen. Arrays
// hebben ook functies die je kunt gebruiken. Zoek uit wat push(), pop(), shift(), slice(), splice(),
// sort(). Maak gebruik van de fruits array en maak voor elke functie een voorbeeld en geef in
// commentaar wat het doet.

// push() Met push kan je nog een value toevoegen , deze komt altijd als de laatste in de array


Fruits.push("Watermeloen", "Framboos");
console.log(Fruits);
// pop() Met pop kan je een value verwijderen uit de array , let op dit is ook de laatste value .
Fruits.pop();
console.log(Fruits);
// shift() met shift verwijder je het eerste item.
Fruits.shift();
console.log(Fruits);
// slice() zorgt ervoor dat je bepaalde stukken eruit kan halen.Selecteer elementen uit een array
 let newFruits =  Fruits.slice(2,4);
console.log(newFruits);
// splice() hiermee voeg je iets toe op een aangewezen plek in de array.
// function toevoeging () {
 Fruits.splice(2, 0, "Lemon", "Appel");
console.log(Fruits);
//  sort() hiermee sorteer je array op alfabetische volgorde
Fruits.sort();
console.log(Fruits);

// Opdracht 7:
// Naast de functies die je van de array kunt gebruiken heb je ook nog de “length” property die
// je kunt gebruiken. Hiermee kan je de grootte van de array opvragen. Gebruik de length
// property en print in de console uit hoe groot de fruits array is.

Fruits.length;
console.log(Fruits.length);

// Opdracht 8:
// De bestaande values van de array kan je ook aanpassen. Zoek uit hoe je op een specifieke
// index de waarde kan aanpassen. Pas de value “Peer” naar “Sinaasappel”.
// Antwoord: Je kan dit aanpassen dmv old en new index.
https://www.codegrepper.com/code-examples/delphi/change+index+of+element+in+array+javascript

function arraymove(arr, fromIndex, toIndex) {
    let element = arr[fromIndex];
    
    arr.splice(fromIndex, 1 , element);
    arr.splice(toIndex, 0, element);
}
consol.log(arraymove);

// lastige even overslaan 

// Opdracht 9:
// Kijkend naar de fruits array. Hoe draai je de values “Aardbei” en “Mandarijn” om in de array
// door gebruik te maken van indices (index)

let indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
let element = 'a';
let idx = Fruits.indexOf(element);
while (idx = "Kersen") {
  indices.push(idx);
  idx = Fruits.indexOf(element, idx + "Pear");
}
console.log(indices);
// [0, 2, 4]