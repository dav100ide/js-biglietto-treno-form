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
   const ageValue = Number(age.value);
   let message = `Biglietto Standard`;
   let price = kmValue * 0.21;

   if (ageValue == 'minor') {
      price -= price * 0.2;
      message = `Offerta Minorenni`;
   } else if (ageValue == 'over-65') {
      price -= price * 0.4;
      message = `Offerta Over 65`;
   }
   document.getElementById('show-ticket').addEventListener('click', function () {
      //display biglietto
      document.getElementById('ticket').classList.replace('d-none', 'd-block');
      // dati biglietto
      document.getElementById('passenger-name').innerHTML = userNameValue;
      document.getElementById('discount-type').innerHTML = message;
      document.getElementById('wagon').innerHTML = Math.floor(Math.random() * 11);
      document.getElementById('cp-code').innerHTML = Math.floor(Math.random() * 10000) + 90000;
      document.getElementById('ticket-price').innerHTML = `€${price.toFixed(2)}`;
   });
   // cliccando il tasto annulla si resetta il campo input e si chiude il bliglietto
   document.getElementById('cancel').addEventListener('click', function () {
      document.getElementById('ticket').classList.replace('d-block', 'd-none');
   });
}
