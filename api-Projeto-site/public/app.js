
// criando uma const = A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser
// alterada ou retribuída.

////A funcao querySelectorAll() recebe um argumento de string contendo um seletor CSS e retorna um objeto NodeList representando os elementos 
//do documento que correspondem ao seletor

const inputs = document.querySelectorAll(".input");

// adicionando o evento
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}


//mesma coisa, faremos quando ele perder o foco, adicionaremos um listenet de evento
// de desfoque e selecionaremos parent, mas desta vez removeremos a classe de foco
// removendo

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

//O método JavaScript forEach é um tipo de estrutura de repetição
// == operador de igual. > operador maior
// aqui estamos criando o evento

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


    
    $(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
        } else {
            $(".item").addClass("active");
        }
    });
});
    
