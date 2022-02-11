import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchanger from './js/currency-exchanger';

function clearFields () {
  $('#user-dollars').val("");
  $('#currency-results').html("");
  $('#non-user-error').html("");
  $('#user-good').hide();
  $('#user-bad').hide();
  $('#show-error').hide();
}

// function getElements(response) {
//   if (!response.bikes) {
//     $('#show-errors').text(`Oopsie daisy! Something went wrong on our end. Error: ${response}`);
//     return;
//   } else if (response.bikes.length === 0) {
//     $('#show-bikes').text(`No bikes have been reported stolen within 10 miles of this zip code.`);
//   } else if (response.bikes) {
//     $('#show-bikes').text(`The last bike that was stolen in your zipcode is a ${response.bikes[0].frame_colors.toString()} ${response.bikes[0].frame_model} ${response.bikes[0].manufacturer_name}`);
//   }
// }

$(document).ready(function() {
  $('#bike-search').submit(function(event) {
    event.preventDefault();
    let userCurrency = $('#user-currency-choice').val();
    let userAmount = $('#user-dollars').val();
    clearFields();
    CurrencyExchanger.exchangeRate(userCurrency, userAmount)
      .then(function(response) {
        getElements(response);
      });
  });
});
