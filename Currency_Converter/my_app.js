console.log("It works")


// Fetch API
    // Function or method used to make HTTP requests to the server
    // Interact with API

// HTTP Verbs
// GET
// PUT
// POST
// DELETE

// Fetch Syntax
// fetch(url, {method: "DELETE"})

const baseURL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_6ynVxAILR1WwcxOZ7BkWXnYoYLBMcR4VMnv4JAkL"


// fetch(baseURL)
// .then(res => res.json())
// .then(data => console.log(data))

// Currency data
const currencies = {
    "AUD":1.5116001596,"BGN":1.6668001744,"BRL":5.330600563,"CAD":1.393960211,
    "CHF":0.7969101169,"CNY":7.119000951,"CZK":20.6796034009,"DKK":6.362420742,
    "EUR":0.8522001306,"GBP":0.7418200748,"HKD":7.7811609438,"HRK":6.2799407661,
    "HUF":331.6400562193,"IDR":16679.00191956,"ILS":3.3175003762,"INR":88.6832153015,
    "ISK":121.5300154798,"JPY":147.0870163903,"KRW":1402.8202671476,"MXN":18.3850035323,
    "MYR":4.2061204539,"NOK":9.9196012717,"NZD":1.7178002893,"PHP":58.1620102641,
    "PLN":3.6323404629,"RON":4.3330008402,"RUB":82.4991086296,"SEK":9.3758618721,
    "SGD":1.2877102218,"THB":32.4130061364,"TRY":41.5981081984,"USD":1,"ZAR":17.2120033276
  };
  
  // Populate select dropdowns
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  
  Object.keys(currencies).forEach(code => {
    const option1 = document.createElement("option");
    option1.value = code;
    option1.textContent = code;
    fromCurrency.appendChild(option1);
  
    const option2 = document.createElement("option");
    option2.value = code;
    option2.textContent = code;
    toCurrency.appendChild(option2);
  });
  
  // Default selection
  fromCurrency.value = "USD";
  toCurrency.value = "EUR";
  
  // Conversion function (re-using rates directly here)
  async function convertCurrency(amount, from, to) {
    try {
      const rateFrom = currencies[from];
      const rateTo = currencies[to];
      const converted = ((amount / rateFrom) * rateTo).toFixed(2);
      return `${amount} ${from} = ${converted} ${to}`;
    } catch (err) {
      console.error("Error:", err);
      return "Conversion failed!";
    }
  }
  
  // Handle form submission
  document.getElementById("converterForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value);
    const from = fromCurrency.value;
    const to = toCurrency.value;
  
    const resultText = await convertCurrency(amount, from, to);
    document.getElementById("result").innerText = resultText;
  });
  