import { conversionDataArray } from "./conversionData.js";
function renderConversions(inputValue, conversionsContainer) {
  conversionsContainer.innerHTML = "";
  for (let conversion of conversionDataArray) {
    conversion["inputValue"] = inputValue;
    conversion["convertedValue"] = getConvertedValue(conversion);
    conversionsContainer.innerHTML += getConversionHtml(conversion);
  }
}

function getConvertedValue(conversion) {
  return (conversion.inputValue * conversion.multiplier).toFixed(2);
}

function getConversionHtml(conversion) {
  let { type, from, to, convertedValue } = conversion;
  return `<section class="conversions-container">
        <div class="conversion-item">
          <h3 class="conversion-header">${type}(${from}/${to})</h3>
          <p class="conversion-text">${convertedValue}</p>
        </div>`;
}

export { renderConversions };
