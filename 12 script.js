let number = 0;
const h1 = document.querySelector("h1");

let clicado = false;

function start() {
  if (!clicado) {
    clicado = true;
    cron = setInterval(() => {
      number++;
      h1.innerHTML = number / 100;
    }, 10);
  }
}

function stop() {
  clicado = false;
  clearInterval(cron);
}

function reset(){
    number = 0
    h1.innerHTML = "0.00"

}
