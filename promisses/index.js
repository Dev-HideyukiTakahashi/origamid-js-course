/* promise */
function promise() {
  const promessa = new Promise((resolve, reject) => {
    let condicao = false;
    if (condicao) {
      setTimeout(() => {
        resolve("Resolvido");
      }, 1000);
    }
    else {
      reject(Error('Rejeitado! ERRO!'))
    }
  });

  // then retorna outra promisse
  const retorno = promessa.then(resolve => {
    // retorna 'Resolvido' se condicao = true
    console.log(resolve);
    return 'Teste';
  }).then(resolve => {
    // retorna 'Teste' se condicao = true
    console.log(resolve);
  }).catch(reject => {
    // retorna 'Rejeitado! ERRO!' se condicao = false
    console.log(reject);
  }).finally(() => {
    // sempre é executado idependente da condicao
    console.log("Finally aconteceu");
  });

}

promise();

/* promise all*/

function promiseAll() {
  const dados = new Promise(resolve => {
    setTimeout(() => {
      resolve('Dados carregados . . .');
    }, 1500)
  });

  const login = new Promise(resolve => {
    setTimeout(() => {
      resolve('Usuário logado!');
    }, 1000)
  });

  // retorna um array com as promises resolvidas
  const carregouTudo = Promise.all([login, dados]);
  carregouTudo.then(resolve => {
    // retorno: (2) ['Usuário logado!', 'Dados carregados . . .']
    console.log(resolve);
  });
}

promiseAll();
