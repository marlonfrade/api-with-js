// Definimos duas funções, uma para para realizar o POST e outra para obter a informação do user e cadastrar o usuário

function cadastraUsuario() {
  // Evita que a página recarregue ao submeter o formulário
  event.preventDefault();
  // URL que será usada no método POST para enviar ao servidor criptografado
  let url = "http://127.0.0.1:5000/users";
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");

  //   Testando o retorno das variáveis declaradas acima
  //   console.log(nome, email);

  //   Confirmou que nosso retorno são os inputs necessários, extraímos as informações presentes nele.
  const nomeValor = nome.value;
  const emailValor = email.value;

  //   verificando novamente o retorno da dos valores dentro do console
  console.log(nomeValor, emailValor);

  const body = {
    name: nomeValor,
    email: emailValor,
  };
  //   Agora que passamos o JSON damos um console.log dentro da função para verificar se está tudo correndo de acordo.

  //   Confirmado o valor de retorno precisamos executar a função de fazPost
  fazPost(url, body);
  // Os parâmetros acima são a URL, e o body, que seria um objeto JS, que a gente passa para o servidor em algum formato, como JSON e HTML
}

function fazPost(url, body) {
  console.log(body);
  //   Verificamos no console se foi retornado um JSON contendo os parâmetros passados no BODY que declaramos na função declaraUsuário

  // Agora nos baseamos na função que usamos para ter um GET e declaramos no fazGet()
  let request = new XMLHttpRequest();
  //  Aqui mudamos os parâmetros em relação ao GET, pois precisamos de um post e um true.
  request.open("POST", url, true);
  // Com a função abaixo abrimos o servidor e enviamos o body para ele,porém estamos apenas mandando sem informar exatamente o que estamos mandando, para isso precisamos esclarecer.
  request.setRequestHeader("Content-type", "application/json");
  // content type define o conteúdo do nosso cabeçalho para dizer o tipo de conteúdo que estamos enviando.
  //Com a declaração acima especificamos e passamos como parâmetro o content-type, porém existem várias maneiras de especificar
  request.send(JSON.stringify(body));

  //   Pra saber o que acontece quando mandamos a informação pois leva um tempo
  request.onload = function () {
    // Criamos uma função anônima e damos um console para poder  verificar a response que estamos obtendo dentro do nosso envio de JSON.
    console.log(this.responseText);
  };

  return request.responseText;
}
