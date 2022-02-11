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

function getElements(response) {
  if (response.result === "success") {
    $('#user-good').show();
    $('#currency-results').html(`${response.conversion_result} ${target_code}`);
  } else if (response.result === "error") {
    $('#show-bad').show();
  } else {
    $('show-error').show();
    $('#non-user-error').html(`${response}`);
  }
}

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
