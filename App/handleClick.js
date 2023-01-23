import { renderConversions } from "./renderConversions.js";
function handleClick() {
  const convertBtn = document.getElementById("convert-button");
  const conversionsContainer = document.getElementById("conversions-container");

  convertBtn.addEventListener("click", () => {
    const inputValue = getInputValue();
    renderConversions(inputValue, conversionsContainer);
  });
}

function getInputValue() {
  return parseFloat(document.getElementById("input").value);
}
export { handleClick };
