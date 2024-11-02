const frase1 = 'JavaScript';
const fraseNova1 = frase1.replace(/a/g, 'o'); // /g é a flag para alterar em todas ocorrências

console.log(fraseNova1); // out: JovoScript

const regexp1 = /[-.]/g; // selecionando tudo (/g) que tem '-' e '.' 
const cpf = '111.222.333-44'.replace(regexp1, ''); // removendo por um espaço em branco
console.log(cpf); // out: 11122233344 

const regexp2 = /[a-z]/g; // busca por itens de 'a' à 'z'
const regexp3 = /[0-9]/g; // busca por números de 0 à 9 

const regexp4 = /Bra[sz]il/g; // busca por Brasil ou Brazil
const frase2 = "Brasil e Brazil".replace(regexp4, 'teste');
console.log(frase2); // out: teste e teste

const regexp5 = /[^jv]/g; // ^ =  negação, seleciona tudo com excessão de j e v
const frase3 = "Frase alterada, jv".replace(regexp5, '-0-');
console.log(frase3); // out: -0--0--0--0--0--0--0--0--0--0--0--0--0--0--0--0-jv

const regexp6 = /i{4}/g; // seletor de quantificação seria mesma coisa que /iiii/g
const frase4 = "Vaiiiiiii".replace(regexp6, 'u'); // substitiu os 4 primeiros 'i' por 'u'
console.log(frase4); // Vauiii 

const regexp7 = /o+/g; // seleciona todo 'i' e se for seguido vai contar como apenas 1
const frase5 = "Goooooool gol goool".replace(regexp7, 'u'); // substitiu qualquer 'o' mesmo que mais de 1 em sequência por 1 'u'
console.log(frase5); // Gul gul gul 

