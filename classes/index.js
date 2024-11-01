
/* Relembrando function */

function relembrando() {
  function Button(text, background) {
    this.text = text;
    this.background = background;
  }

  Button.prototype.element = function () {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
  const blueButton = new Button('Comprar', 'blue');

  console.log(blueButton.element());
  // <button style="background: blue;">Comprar</button>
}

relembrando();



/* Classes */

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
}

const blueButton = new Button('Comprar', 'blue');
console.log(blueButton.element());
// <button style="background: blue;">Comprar</button>

// get e set
const button = {
  get tamanho() {
    return this._numero;
  },
  set tamanho(numero) {
    this._numero = numero;
  }
}

button.tamanho = 20; // set
console.log(button.tamanho); // get


// extends

class Veiculo {
  constructor(rodas) {
    this.rodas = rodas
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas);
    this.capacete = capacete;
  }
  empinar() {
    super.acelerar();
    console.log('Moto empinou com ' + this.rodas + ' rodas.');
  }
}

const honda = new Moto(2, true);
honda.empinar();
// Acelerou
// Moto empinou com 2 rodas.