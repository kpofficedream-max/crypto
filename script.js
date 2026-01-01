fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
  .then(response => response.json())
  .then(data => {
    document.getElementById("btc").innerText = data.bitcoin.usd + " $";
    document.getElementById("eth").innerText = data.ethereum.usd + " $";
  })
  .catch(error => {
    console.error("Gabim:", error);
  });
