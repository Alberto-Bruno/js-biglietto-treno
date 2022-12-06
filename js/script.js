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
const basePrice = kms * 0.21;
let finalPrice = basePrice;


// ! Flag
let discount = null;

// Verificare i vari sconti
if(age >= 65){
    finalPrice *= 0.6;
    discount = "40%";
    
} else if(age < 18) {
    finalPrice *= 0.8;
    discount = "20%";
}

if (discount) {
    const originalPriceElement = document.getElementById('original-price');
    const discountMessageElement = document.getElementById('discount-message')

    let discountMessage = 'Sconto ' + discount;
    discountMessageElement.innerText = discountMessage;
    originalPriceElement.innerText = basePrice.toFixed(2) + '€';
}

targetElement.innerText = priceMessage + '€' + finalPrice.toFixed(2);

