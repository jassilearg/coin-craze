let quantia = document.querySelector(".quantia");
let botaoConverter = document.querySelector(".botao-converter");
let resultado = document.querySelector(".resultado");

// Chave de API fornecida
const API_KEY = "cLn0B9tZZYWrABNKuiPxFyzKz0iD4wCR";

async function converterMoeda() {
  let requestURL = `https://api.apilayer.com/exchangerates_data/convert?from=BRL&to=USD&amount=${quantia.value}`;

  let myHeaders = new Headers();
  myHeaders.append("apikey", API_KEY);

  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    let response = await fetch(requestURL, requestOptions);
    let data = await response.json();

    if (response.ok) {
      // Exibir o resultado da conversão
      resultado.textContent = data.result.toFixed(2);
    } else {
      // Exibir mensagem de erro da API
      resultado.textContent = data.message;
    }
  } catch (error) {
    console.log('error', error);
    resultado.textContent = "Erro na solicitação";
  }
}

botaoConverter.addEventListener("click", (e) => {
  e.preventDefault();
  converterMoeda();
});
