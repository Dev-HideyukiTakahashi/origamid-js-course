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