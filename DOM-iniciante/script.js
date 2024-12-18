/* Seletores DOM */

const animais = document.getElementById('animais');

// retorna como se fosse um array
const gridSection = document.getElementsByClassName('grid-section');

// querySelector sempre retorna o primeiro resultado
// parâmetros mesma sintaxe de css
const primeiraUl = document.querySelector('ul');

// colocar '^' faz uma busca "contém"
// sem '^' a busca seria literal
const linkInterno = document.querySelector('[href^="#"]');

// retorna como se fosse um array
const animaisImg = document.querySelectorAll('.animais img');

// retorna uma node list, permite método forEach() 
const gridSectionNode = document.querySelectorAll('.grid-section');

/* Seletores DOM FIM */
/* --------------------------------------------------------------------------- */

/* forEach */

const imgs = document.querySelectorAll('img');
imgs.forEach(function (item, index) {
  // console.log(item)
});

// getElementsByClassName não retorna um array, convertendo
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  // console.log(item.textContent);
});

// arrow function
const imgsArrow = document.querySelectorAll('img');

// com único argumento não precisa de parenteses
// retorno de uma linha é possível omitir as chaves
imgs.forEach((item) => {
  // console.log(item);
});
// imgs.forEach(item => console.log(item));

/* forEach FIM */
/* --------------------------------------------------------------------------- */

/* Classes e atributos */

const menu = document.querySelector('.menu');

menu.classList; // lista de classes
menu.classList.add('ativo'); // adicionando classe 'ativo'
menu.classList.add('ativo', 'mobile'); // adicionando 2 classes 
menu.classList.remove('ativo'); // removendo classe
menu.classList.toggle('ativo'); // retorna true quando adiciona classe / false quando remove
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

// retorna um array-like com atributos do elemento
const animais2 = document.querySelector('.animais');
animais2.attributes; // retorna todos os atributos
animais2.attributes[0]; // primeiro atributo

const img = document.querySelector('img');
img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Altenativo'); // muda o campo alt
img.hasAttribute('id') // true / false
img.removeAttribute('alt'); // remove o campo alt

/* Classes e atributos FIM */
/* --------------------------------------------------------------------------- */

/* Dimensões e Distâncias */

// mesmos métodos para width
const listaAnimais = document.querySelector('.animais-lista');
listaAnimais.clientHeight; // height + padding
listaAnimais.offsetHeight; // height + padding + border
listaAnimais.scrollHeight; // height total, mesmo dentro do scroll

listaAnimais.offsetTop; // distância em relação o topo
listaAnimais.offsetLeft; // distância em relação a esquerda

window.innerWidth; // width da janela
window.innerHeight; // height da janela

/* Dimensões e Distâncias FIM*/
/* --------------------------------------------------------------------------- */

/* Eventos */

// elemento.addEventListener('click', function(){
//   código aqui
// });

const img2 = document.querySelector('img');

function callback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento (click nesse caso)
  const path = event.path;
}
img.addEventListener('click', callback);


function handleKeyboard(event) {
  if (event.key === 'f') {
    document.body.classList.toggle('fullscream')
  }
}
window.addEventListener('keydown', handleKeyboard);
/* Eventos FIM*/
/* --------------------------------------------------------------------------- */

