function renderHeader() {
  document.getElementById("header").innerHTML = getHeaderHtml();
}

function getHeaderHtml() {
  return `
     <h2 class="heading-text">Metric/Imperial Unit Conversion</h2>
        <input type="text" class="input-text" id="input" />
        <button class="convert-button" id="convert-button">Convert</button>
    `;
}
export { renderHeader };
