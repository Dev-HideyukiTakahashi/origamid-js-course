/* fetch */

const doc = fetch('./doc.txt');

doc.then(resolve => {
  // retorna a response HTTP
  console.log(resolve);
  return resolve.text();

}).then(body => {
  // retornando o body da response
  // incluindo no index.html
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerHTML = body;
});


const cep = fetch('https://viacep.com.br/ws/01310100/json/');

cep
  .then(resolve => resolve.json()) // pegando json da resposta
  .then(body => {
    // saída json
    // {cep: '01310-100', logradouro: 'Avenida Paulista', complemento: 'de 612 a 1510 - lado par', unidade: '', bairro: 'Bela Vista', …}
    console.log(body);
    const conteudo = document.querySelector('.conteudo2');
    conteudo.innerHTML = body.logradouro; // saída Avenida Paulista
  });



/* blob - para trabalhar com arquivos */

const imagem = fetch('./imagem.png');

imagem
  .then(resolve => resolve.blob()) // transformando img em blob
  .then(body => {
    // criando url com blob da imagem
    const blobUrl = URL.createObjectURL(body);
    // adicionando a imagem no index.html
    const imagemDom = document.querySelector('img');
    imagemDom.src = blobUrl;
  })