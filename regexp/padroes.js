/* padrões de regex */


// CEPS
// ? = flag de opcional 
const regexpCep = /\d{5}[\s-]?\d{3}/g;

const ceps = [
  '00000-000',
  '00000 000',
  '00000000',
  '00000.000' // não está no padrão retorna null na chamada abaixo
];

function initCeps() {
  ceps.forEach((cep) => console.log(cep.match(regexpCep)));
}


// CPF - CNPJ
// ?:  = não captura grupos
// () = parenteses identifica um loop, nesse exemplo * 3 - identificado por {3}
const regexCPF = /(?:\d{3}[-.]?){3}\d{2}/g;
const regexCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}\/?\d{4}[-.]?\d{2}/g;

const cpfs = [
  '000.000.000-00',
  '000-000-000-00',
  '000.000.000.00',
  '000000000-00',
  '00000000000',
  '000-000-000/00' // não está no padrão retorna null na chamada abaixo
];

function initCPF() {
  cpfs.forEach((cpf) => console.log(cpf.match(regexCPF)));
}

function initformataCPF() {
  const cpf = '122-222-333.44';
  function limparCPF(cpf) {
    return cpf.replace(/\D/g, ''); // replace em tudo que não é dígito por vazio
  };
  console.log(limparCPF(cpf)) // out: 12222233344  - CPF limpo

  function construirCPF(cpf) {
    // () = separa por grupos
    // $ = placeholder para selecionar o grupo
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }
  console.log(construirCPF(limparCPF(cpf))) // out: 122.222.333-44  - inicialmente era 122-222-333.44
}






// TELEFONE
// \s  = seleciona espaço em branco
const regexpTel = /\d{2}[-\s]?\d{8}/g;
const regexpCelular = /\d{2}[-\s]?\d{9}/g;

const celular = [
  '11-942051849',
  '11942051849',
  '11 942051849',
  '11.942051849' // não está no padrão retorna null na chamada abaixo
]

function initCelular() {
  celular.forEach(num => console.log(num.match(regexpCelular)));
}

// EMAIL
// i = case sensitive
const regexEmail = /[\w.-]+@[\w-]+\.[\w.-]+/gi;

const emails = [
  'email@email.com',
  'email@email.com.org',
  'email-email@email.com',
  'email_email@email.com',
  'email.email123@email-empresa.com',
  'email.email123-email-empresa.com', // não está no padrão retorna null na chamada abaixo, falta o '@'
];

function initEmails() {
  emails.forEach(email => console.log(email.match(regexEmail)));

  // testando se o objeto está de acordo com a regex
  console.log(regexEmail.test(emails[4])); // true 
  console.log(regexEmail.test(emails[5])); // false - falta o '@'
}

initCeps();
initCPF();
initformataCPF();
initCelular();
initEmails();