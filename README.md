# Currency Exchanger

#### Convert USD to any other ISO 4217 supported currency via the ExchangeRate-API

#### Contributors

 * _Alex Adamovic_

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_

#### Dependencies
##### _This project was built using [Node.js v16.x] and utilizes the following dependencies:_

* _jQuery_
* _Bootstrap_
* _Popper.js_
* _Webpack_
* _ESLint_
* _Babel_
* _dotenv_

## Description

This JavaScript application utilizes the ExchangeRate-API to convert a user inputted amount of USD to any other ISO 4217 supported currencies via a second user input of a three letter currency code. The application UI is intentionally sparse, and was mainly built to showcase the proper use of API calls, implementation of asynchronous JavaScript code methods, and contain robust error-checking with exception handling.

## Setup/Installation Requirements

* _clone repository from https://github.com/alexadamovic/currency-exchanger_
* _navigate to the project directory in your terminal/command line_
* _enter ```$ npm install``` first to install project dependencies_
* _navigate to the [ExchangeRate-API](https://www.exchangerate-api.com/) homepage in your browser_
* _sign up for a free account to get access to an API key_
* _confirm your email and your API key will be displayed in both the "Dashboard" and "API Keys" tabs while signed in on ExchangeRate-API_
* _copy the API key (you will need it in the next few steps)_
* _create a blank .env file in the project directory where you have cloned the repository_
* _enter "API_KEY=" into the .env file without quotes and then paste your API key after the = sign_
* _save the .env file_
* _your environment should now be fully set up (the dotEnv plugin will communicate your API key to the business logic without it being displayed and gitignore will prevent your .env file from being pushed to an online repository)_
* _enter ```$ npm run start``` to start live server and open in your browser_
* _enter ```$ npm run lint``` to check for warnings and errors in code syntax when editing_
* _enter ```$ npm run build``` to minimize and pack code when ready to publish_

## Known Bugs

* _although user error prevention is robust, it isn't completely foolproofed. Error handling is in place though to inform users of any error messages and encourage them to go back and try again if an error is returned_

## License

_MIT License_

Copyright (c) _2022_ _Alex Adamovic_

## Contact Information

alexanderadamovic@gmail.com
