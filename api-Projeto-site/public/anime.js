//Document.querySelector()
//Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e
// transversal dos nós do documento) que corresponde ao grupo especificado de seletores.

//A declaração const cria uma variável cujo o valor é fixo
const btn_entrar = document.querySelector("#btn-entrar");
const btn_cadastrar = document.querySelector("#btn-cadastrar");
const logincontainer = document.querySelector(".login-container");



btn_cadastrar.addEventListener("click", () => {
  logincontainer.classList.add("sign-up-mode");
});

btn_entrar.addEventListener("click", () => {
  logincontainer.classList.remove("sign-up-mode");
});



// function do header

$(function () {
  $(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
      $(".item").removeClass("active");
    } else {
      $(".item").addClass("active");
    }
  });

});




// javascript do menu (responsavel por "ativar o menu mobile e desativar o menu web") 


window.onload = function (e) {
  var offset = document.getElementsByClassName('header')[0].offsetTop;
  var menu = document.getElementsByClassName('header')[0];

  document.addEventListener('scroll', function () {
    if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
      menu.style.position = 'fixed';
    } else {
      menu.style.position = 'initial';
    }
  });
}


$(function () {
  $(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
      $(".item").removeClass("active");
    } else {
      $(".item").addClass("active");
    }
  });
});





// funçao da validaçao dos campos

function cadastrar() {

  // Variaveis que vao portar o valor do id
  var empresa = document.getElementById('idEmpresa');  // seleciona todo o documento e puxa o id
  var email = document.getElementById('idEmail');  // seleciona todo o documento e puxa o id
  var usuario = document.getElementById('idUsuario');  // seleciona todo o documento e puxa o id


  if (empresa.value.length < 5) {
   
    alert("É obrigatório o nome ser valido");
    empresa.focus(); // foca no input
    return false; //para o processo

  } else {
    // 0 -1 no vetor fa verificar se ambos estao correspondendo
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
     
      alert("Por favor, informe um email valido");
      email.focus();
      return false; //para o processo

    } else {

      return true;
    }

  }
}

// /funçao da validaçao dos campos //



// funçao do mostrar e esconder senha 

// o evento se inicia quando clica no icon
function senha_icon() {
  var inputSenha = document.getElementById('idSenha')
  var icon1 = document.getElementById('icon-olhos1')
  var icon2 = document.getElementById('icon-olhos2')

  if (inputSenha.type === 'password') {
    inputSenha.type = "text";
    icon1.style.display = "block";
    icon2.style.display = "none";
  } else {
    inputSenha.type = "password";
    icon1.style.display = "none";
    icon2.style.display = "block";
  }


}

 // funçao se inicia ao digitar no campo
function validarSenhaForca() {

 
  var senha = document.getElementById('idSenha').value; //buscando o id e passando em uma variavel
  var forca = 0; // variavel que define 

  if ((senha.length >= 2) && (senha.length <= 5)) {
    forca += 2; // fraca
    senha.focus();

  } else if (senha.length = 6) {
    forca += 5; // fraca
  }

  if ((senha.length >= 7) && (senha.match(/[a-z]+/))) {
    forca += 6; //11 pontos, media
  }

  if ((senha.length >= 8) && (senha.match(/[A-Z]+/))) {
    forca += 4; // 15 pontos, forte
  }

  if ((senha.length >= 10) && (senha.match(/[@#$%&;*]/))) {
    forca += 6; // excelente
  }

  if (senha.match(/([@&>%.$]+)\1{1,}/) && (senha.length >= 10)) {
    forca += 20; // excelente
  }

  mostrarForca(forca); // Faz referencia a funçao força
}

function mostrarForca(forca) {

  if (forca < 6) {
    document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #ff0000'>Fraca</span>";
    document.getElementById("dicaSenha").innerHTML = "<span>Uma senha para ser forte precisa ter números, letras maiúsculas, minúsculas <br> e símbolos (exem: @, $, #, etc...)'</span>";
  } else if ((forca >= 7) && (forca <= 11)) {
    document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #FFD700'>Média</span>";
  } else if ((forca >= 12) && (forca <= 15)) {
    document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #7FFF00'>Forte</span>";
  } else if ((forca >= 16) && (forca <= 40)) {
    document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #008000'>Excelente</span>";
  }
}

//   / validar senha




// funçao da mascara do cnpj

function mascaraCnpj() {
  var empresa = document.getElementById('idEmpresa');
  var cnpj = document.getElementById('idCnpj');

  if (cnpj.value.length == 2 || cnpj.value.length == 6) {
    cnpj.value += ".";
    empresa.style.borderColor = "#ccc";
  } else if (cnpj.value.length == 10) {
    cnpj.value += "/";

  } else if (cnpj.value.length == 15) {
    cnpj.value += "-";

  }

}


// Ressaltamos que a validação é realizada conforme o algoritmo do CNPJ, o que significa que
// um número válido não necessariamente é um número existente e com situação cadastral 
//regular perante a Receita Federal do Brasil.

function validarCNPJ(el) {
  if (!_cnpj(el.value)) {  //se for diferente da funçao que valida o cnpj, ele retorna o valor

    alert("CNPJ é inválido!");

    // apaga o valor
    el.value = "";

  }
}

function _cnpj(cnpj) {


  // substituindo valores invalidos, para campo vazio (depois da virgula)
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj.type == 'text') return false;  // se cnpj for igual a nada, retorna fals0

  if (cnpj.length = 0)
    return true; // Retira o bug de campo vazio


  if (cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999")
    return false;  // eliminando numeros invalidos conhecidos 

  //valida dvs
  tamanho = cnpj.length - 2
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;

  //A declaração for começa declarando a variável i e inicializando-a como o valor do tamanho.
  // Ela verifica se i é maior ou igual que 1, executa as duas instruções subsequentes e decrementra 1 da variável i
  // diminui e retorna o valor antes de diminuir. após cada passagem pelo loop.
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--; //valor de soma é reatribuido por numero, retorna o tamanho - o indice do i
    if (pos < 2)
      pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11; // resultado, é a soma é subtraido de 11.
  // e se for menor que 2, seu resultado é zero.


  //segundo numero do dvs
  if (resultado != digitos.charAt(0)) return false;
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
    return false;

  return true;

}

//Na linha 3, eliminamos todos os caracteres não númericos do CNPJ passado como parâmetro, 
//considerando que quem invocou a função pode ter utilizado-se de uma possível máscara no campo.

//A instrução if da linha 7 verifica se a quantidade de numerais da string
// (considerando-a já limpa) é igual a quantidade correta - 14.

//As linha 10 à 21 checam se a string é formado apenas por valores iguais. 
//Esta verificação é necessária uma vez que se aplicarmos o algoritmo do CNPJ.

//As linha 23 à 49 checam os dois dígitos verificadores, 
//verificando sua validade de acordo com o algoritmo do CNPJ. Caso negativo, a validação retorna false encerrando a função.

//Caso o algoritmo alcance a linha 51 temos um CNPJ válido e o valor true é retornado.