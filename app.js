let BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let dropdown = document.querySelectorAll(".dropdown select");
let amtval = document.querySelector(".amount input");
let fromk = document.querySelector(".from select");
let tokk = document.querySelector(".to select");
let btn = document.querySelector("#btn");

for (let select of dropdown) {
  for (currcode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = countryList[currcode];
    newoption.value = currcode;
    if (select.name == "from" && newoption.innerText == "US Dollar") {
      newoption.selected = "selected";
    } else if (select.name == "to" && newoption.innerText == "Indian Rupee") {
      newoption.selected = true;
    }
    select.append(newoption);
  }
  select.addEventListener("change", (evt) => {
    let code = evt.target;
    let url = `https://flagsapi.com/${code}/flat/64.png`;
    let img = evt.target.parentElement.querySelector("img");
    img.src = url;
  });
}

let updatetherate = async () => {
  let msg = document.querySelector(".msg")
  let amount = document.querySelector(".amount input");
  let amtval = amount.value;
  if (amtval === "" || amtval < 1) {
    amtval = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromk.value.toLowerCase()}/${tokk.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[tokk.value.toLowerCase()];

  let finalAmount = amtval * rate;
  msg.innerText = `${amtval} ${fromk.value} = ${finalAmount} ${tokk.value}`;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updatetherate();
 });

window.addEventListener("onload", () => {
  updatetherate();
});