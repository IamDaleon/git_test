function eyeLash() {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");
    let time = prompt("Ready to cut down your makeup time in half?");

    if (time === "yes") {
      alert(
        "Thank you " +
          name +
          "! We will contact you to setup your appointment!"
      );
    } else {
      alert("We have other options to enhance your lashes");
    }
  }
  let button = document.querySelector("button");
  button.addEventListener("click", eyeLash);