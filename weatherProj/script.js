function tempCity() {
    let city = prompt("What city do you live in?");
    let temp = prompt("What temperature is it?");
    let h1 = document.querySelector("h1");
    if (temp >= 0) {
      h1.innerHTML = "😋  <br/> Currently " + temp + "°F in " + city;
    } else {
      h1.innerHTML = "😰 <br/> Currently " + temp + "°F in " + city;
    }
  }
  let button = document.querySelector("button");
  button.addEventListener("click", tempCity);