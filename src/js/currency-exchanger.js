export default class CurrencyExchanger {
  static exchangeRate(userCurrency, userAmount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${userCurrency}/${userAmount}`)
      .then(function(response) {
        console.log(response);
        if (response.status === 400 || response.status === 403 || response.status === 404) {
          return response.json();
        } else if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}