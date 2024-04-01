function applyNow() {
    let name = prompt("What is your name?");
    let age = prompt("How old are you?");

    let h1 = document.querySelector("h1");

    if (age > 18) {
      h1.innerHTML = "Hi, " + name + "! Welcome to Shecodes!";
    } else {
      h1.innerHTML = "Sorry, " + name + " ! You cannot join SheCodes";
    }
  }
  let applyButton = document.querySelector("button");

  applyButton.addEventListener("click", applyNow);