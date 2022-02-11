import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchanger from './js/currency-exchanger';

function clearFields () {
  $('#user-dollars').val("");
  $('#user-currency-choice').val("");
  $('#currency-results').html("");
  $('#non-user-error').html("");
  $('#user-good').hide();
  $('#user-bad').hide();
  $('#api-bad').hide();
  $('#show-error').hide();
}

function getElements(response) {
  console.log(response);
  if (response.result === "success") {
    $('#user-good').show();
    $('#currency-results').html(`${response.conversion_result.toFixed(2)} ${response.target_code}`);
  } else if (response['error-type'] === "malformed-request") {
    $('#user-bad').show();
  } else if (response['error-type'] === "invalid-key") {
    $('#api-bad').show();
  } else {
    $('#show-error').show();
    $('#non-user-error').html(`${response}`);
  }
}

$(document).ready(function() {
  $('#exchange-form').submit(function(event) {
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
