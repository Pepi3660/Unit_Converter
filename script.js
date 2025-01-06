const convert = () => {
  let inputValue = document.getElementById("userInput").value;
  let unit = document.getElementById("unit").value;
  
  if (unit === "milesToKm") {
    milesToKm = true;
  } else {
    milesToKm = false;
  }

  result = 0;

  if (milesToKm) {
    result = inputValue * 1.60934;
  } else {
    result = inputValue / 1.60934;
  }

  const resultString = inputValue + " miles are " + result + " km";
  const resultElement = document.getElementById('resultElement');
  resultElement.innerHTML = resultString;
};
