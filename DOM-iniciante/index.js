/* 
  DOM - DOCUMENTO OBJECT MODEL
*/

// Selecionando o <h1> class="titulo" do html
// o método busca sempre a primeira tag ou primeira tag com classe
const elemento = document.querySelector("h1");


/* Algumas funções */

// retorna o texto
const texto = elemento.innerHTML;

// retorna as classes
const classes = elemento.classList;

// retorna o id
const id = elemento.id;

// ativa função de callback ao click no elemento
elemento.addEventListener('click', function () {
  console.log('Clicou em: ' + elemento.innerHTML);
});



