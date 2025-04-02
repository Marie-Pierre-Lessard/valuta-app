/*  Opgave:

Funktionskrav
    Du skal kunne taste et beløb i Dkkr i et input felt
    Du skal kunne vælge mindst 3 valutaer fra en dropdown menu
    Der skal være en knap med teksten beregn, der trigger en beregning af valuta baseret på input. 
    Resultatet skal vises i et DOM-element.

Design er frit.

Gode ideer og tips:

Hvis du vil begrænse antallet af decimaler på dit resultat, så brug methoden toFixed(antal decimaler). 
F.eks.  result.toFixed(2) giver et resultat med 2 decimaler.

Hvis du vil have navnet på din valuta med fra options i dit select tag, så undersøg denne linje...
 let myCurrency = mySelectElement.options[mySelectElement.selectedIndex].innerText
Prøv evt. at consol logge mySelectElement.options, hvor mySelectElement er det select element du har fundet i din DOM med getElementById()

*/

/* References: 
interaction-events-codelab 
challenges-start/text-formats */


const startingAmountDkk = document.getElementById('startingAmountDkkInput');
const endCurrencyIso = document.getElementById('endCurrencyIsoSelect');
const conversionButton = document.getElementById('convertButton');
const conversionResult = document.getElementById('endAmountP');

conversionButton.addEventListener('click', multiplyValue);

/* If... else if... else does not work. Instead of a series of "ifs", it is also possible to use a switch statement. */
function multiplyValue() {
    console.log(startingAmountDkk.value);
    /* What needs to be multiplied is the value inside of the element, not the element itself! */
    if (endCurrencyIso.value === "CAD") {
        startingAmountDkk.value = startingAmountDkk.value * 0.20922;
    }; 
    if (endCurrencyIso.value === "EUR") {
        startingAmountDkk.value = startingAmountDkk.value * 0.13402;
    };
    if (endCurrencyIso.value === "USD") {
        startingAmountDkk.value = startingAmountDkk.value * 0.14609;
    };
    
    showResult('Ifølge Toldstyrelsens Toldtarif (1. april 2025), er beløbet så meget værd i slutvalutaen: ' + startingAmountDkk.value, conversionResult);

    /* The following is necessary to stop the result of the equation from being displayed both in the startingAmountDkkInput field and the endAmountP field. */    
    startingAmountDkk.value = '';
}

/* The folowing function is the one that actually displays the text/result in the field to the right (below on a mobile), not the above function!
conversionResult is the place where the result conversionData is going to be displayed */
function showResult(conversionData, conversionResult) {
    conversionResult.innerHTML = conversionData;
}

