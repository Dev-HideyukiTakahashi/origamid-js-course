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
gridSectionNode.forEach(function (item, index) {
  console.log(item.textContent + " - index: " + index)
})

/* Seletores DOM FIM */