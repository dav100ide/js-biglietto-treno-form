// definisco le const
const userName = document.getElementById('user-name');
const km = document.getElementById('km');
const age = document.getElementById('age');
// aggiungo gli event listeners così si aggiorna l'input
km.addEventListener('input', getValue);
userName.addEventListener('input', getValue);
age.addEventListener('input', getValue);
// nome funzione ambiguo
function getValue() {
   // definisco i valori degli input con le const
   const userNameValue = userName.value;
   const kmValue = Number(km.value);
   const ageValue = age.value;
   let message = `non è stato applicato lo sconto`;
   let price = kmValue * 0.21;

   if (ageValue == 'minor') {
      price -= price * 0.2;
      message = `è stato applicato lo sconto minorenni`;
   } else if (ageValue == 'over-65') {
      price -= price * 0.4;
      message = `è stato applicato lo sconto maggiorenni`;
   }
   document.getElementById('show-price').addEventListener('click', function () {
      document.getElementById('final-price').innerHTML = `il prezzo finale è di €${price.toFixed(2)} ${message}`;
   });
}
