console.log('JS OK')

/*
1- Il prezzo del biglietto è definito in base ai km (0.21 € al km)
2- Va applicato uno sconto del 20% per i minonenni
3- Va applicato una sconto del 40% per gli over 65
4- L'output del prezzo finale va messo fuori in forma umana
*/


// Prendo l'elemento dalla pagina
const targetElement = document.getElementById('target');
const priceMessage = 'Totale biglietto';

//Main Logics

// 1- Il prezzo del biglietto definito in base ai km
const age = prompt('La tua età' , 35);
const kms = prompt('Km percorsi' , 100);


// Calcolo del prezzo
let price = kms * 0.21;

// ! Flag
let discount = null;

// Verificare i vari sconti
if(age >= 65){
    price = price * 0.6;
    discount = "40%";
    
} else if(age < 18) {
    price = price * 0.8;
    discount = "20%";
}

if (discount) {
    let discountMessage = 'Sconto ' + discount;
    const discountMessageElement = document.getElementById('discount-message')
    discountMessageElement.innerText = discountMessage;
}

targetElement.innerText = priceMessage + '€' + price.toFixed(2);

