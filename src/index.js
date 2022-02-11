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
  $('#catch-user-errors').hide();
}

function getElements(response) {
  console.log(response);
  if (response.result === "success") {
    $('#user-good').show();
    $('#currency-results').html(`${response.conversion_result.toFixed(2)} ${response.target_code}`);
  } else if (response['error-type'] === "malformed-request") {
    $('#user-bad').show();
    $('#user-error-code').html("403: Malformed request. Stick to 3 letters please!");
  } else if (response['error-type'] === "unsupported-code") {
    $('#user-bad').show();
    $('#user-error-code').html("404: Unsupported code. Check your input and try again!");
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
    if (userCurrency.length !== 3 || /\d/.test(userCurrency) === true) {
      $('#catch-user-errors').show();
      return;
    }
    CurrencyExchanger.exchangeRate(userCurrency, userAmount)
      .then(function(response) {
        getElements(response);
      });
  });
});
