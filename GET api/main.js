// Função para fazer o GET da nossa URL
// Função que pode ser executada várias vezes dentro do código e por isso devemos declarar ela isoladamente.

function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function criaLinha(user) {
  // criando o elemento coluna
  let linha = document.createElement("tr");
  //   criando as cedulas
  let tdId = document.createElement("td");
  let tdNome = document.createElement("td");

  // Inserindo as informações do banco
  tdId.innerHTML = user.id;
  tdNome.innerHTML = user.name;

  // dando um append dentro do HTML
  linha.appendChild(tdId);
  linha.appendChild(tdNome);

  // Executando o retorno
  return linha;
}

function main() {
  // Precisamos chamar a nossa função GET com parâmetro da URL do Backend feito em python
  const data = fazGet("http://127.0.0.1:5000/get/usuarios");
  const users = JSON.parse(data);
  // pegar o elemento tabela no HTML
  const tabela = document.getElementById("tabela");

  //   Para visualizar o array que contém as informações do banco que iremos extrair
  //   console.log(users);

  // Confirmado que retorne um objeto dentro do console, podemos trabalhar com ele dentro do JS.
  // Ou seja, pegamos os dados e precisamos jogar na tela essa informação.

  //   Passo-a-passo:
  //     para cada user
  //       criar uma linha
  //        adicionar na tabela

  users.forEach((element) => {
    let linha = criaLinha(element);
    tabela.appendChild(linha);
  });
}

// precisamos executar a função MAIN
main();
