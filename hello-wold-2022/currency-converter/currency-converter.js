// AUTHOR: Nitesh Agrawal
// LANGUAGE: JavaScript
// GITHUB: https://github.com/niteshagrawal

var exchangeRateURL = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20%28%22USDMXN%22%29&env=store://datatables.org/alltableswithkeys&format=json"

$.getJSON(exchangeRateURL, function(data) {
  console.log(data.query.results.rate.Rate);
});    
