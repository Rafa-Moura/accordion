let label = document.querySelectorAll(".box");

label.forEach((e) => {
  e.addEventListener("click", () => {
    removeClass();
    e.classList.toggle("active");
  });
});

function removeClass() {
  label.forEach((e) => {
    e.classList.remove("active");
  });
}

function validarDados(event) {
  let inputs = document.getElementsByClassName("input_valor1");
  event.preventDefault();
  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      let content = inputs[i].parentElement;
      let box = content.parentElement;
      removeClass();
      box.classList.toggle("active");
      inputs[i].focus();
      return;
    }
  }
}
