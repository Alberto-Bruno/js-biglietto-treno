console.log('JS OK')

/*
1- Il prezzo del biglietto è definito in base ai km (0.21 € al km)
2- Va applicato uno sconto del 20% per i minonenni
3- Va applicato una sconto del 40% per gli over 65
4- L'output del prezzo finale va messo fuori in forma umana
*/


// Prendo l'elemento dalla pagina
const targetElement = document.getElementById('target');
const discountMessageElement = document.getElementById('discount-message')
const priceMessage = 'Totale biglietto';
let discountMessage = 'Sconto';

//Main Logics

// 1- Il prezzo del biglietto definito in base ai km
const age = prompt('La tua età' , 35);
const kms = prompt('Km percorsi' , 100);


// Calcolo del prezzo
let price = kms * 0.21;

// Verificare i vari sconti
if(age >= 65){
    price = price * 0.6;
    discountMessage += "40%"
    discountMessageElement.innerText = discountMessage;

} else if(age < 18) {
    price = price * 0.8;
    discountMessage += "20%"
    discountMessage.innerText = discountMessage;

}

discountMessageElement.innerText = discountMessage;
targetElement.innerText = priceMessage + '€' + price.toFixed(2);

