export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  numeros.forEach((numero) => {
    // sinal de '+' converte a string para number
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start = start + incremento;
      numero.innerText = start;
      if (start > total) {
        clearInterval(timer);
        numero.innerText = total;
      }
    }, 50)
  });
}

