let numContas = 0;
let valTotal = 0;
let resposta = "";

function registrarConta() {
  let inDescricao = document.getElementById("inDescricao");
  let inValor = document.getElementById("inValor");
  let outListaContas = document.getElementById("outListaContas");
  let outTotal = document.getElementById("outTotal");

  let descricao = inDescricao.value;
  //É necessário converter para number
  let valor = Number(inValor.value);

  if (descricao === "" || valor === 0 || isNaN(valor)) {
    alert("Por favor, insira valores corretos.");
    inDescricao.focus();
    return;
  }

  numContas++;
  valTotal += valor;

  resposta = `${resposta} ${descricao} R$ ${valor.toFixed(2)} "\n"`;

  outListaContas.textContent = `${resposta} ----------------------------`;
  outTotal.textContent = `${numContas} Conta(s) - Total R$ ${valTotal.toFixed(
    2
  )}`;

  clearInput();
}

function clearInput() {
  inDescricao.value = "";
  inValor.value = "";
  inDescricao.focus();
}

const btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", registrarConta);

//
//
//
//
//
//
//
//
//CÓDIGO ORIGINAL
// //declara e inicializa contadores e acumuladores (variaveis globais)

// var numContas = 0;
// var valTotal = 0;

// //variavel string que acumula contas
// var resposta = "";

// function registrarConta(){
//   //cria referencia aos elementos da pagina manipulados pela function
//   var inDescricao = document.getElementById("inDescricao");
//   var inValor = document.getElementById("inValor");
//   var outListaContas = document.getElementById("outListaContas");
//   var outTotal = document.getElementById("outTotal");

//   //obtem conteudo dos campos
//   var descricao = inDescricao.value;
//   var valor = Number(inValor.value);

//   //verifica preenchimento dos campos
//   if(descricao == "" || valor == 0 || isNaN(valor)){
//     alert("Informe os dados corretamente...");
//     inDescricao.focus();
//     return;
//   }

//   //add valores ao contador e acumulador
//   numContas++;
//   valTotal = valTotal + valor;

//   //concatena as contas
//   resposta = resposta + descricao + " -R$: " + valor.toFixed(2) + "\n";

//   //altera o conteudo das tags de resposta
//   outListaContas.textContent = resposta + "__________________________________";
//   outTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);

//   //limpa campos e posiciona cursor em inDescricao
//   inDescricao.value = "";
//   inValor.value = "";
//   inDescricao.focus();

// }

// //referencia elemento e apos associa function ao evento click
// var btRegistrar = document.getElementById("btRegistrar");
// btRegistrar.addEventListener("click", registrarConta);

// //declara e inicializa contadores e acumuladores (variaveis globais)
// let numContas = 0;
// let valTotal = 0;

// //variavel string que acumula as contas
// let resposta = "";

// function registrarConta(){
//   // cria referencia aos elementos da pagina manipulados pela function
//   const inDescricao = document.getElementById('inDescricao');
//   const inValor = document.getElementById('inValor');
//   const outListaContas = document.getElementById('outListaContas');
//   const outTotal = document.getElementById('outTotal');

//   //obtem conteudo dos campos e converte o valor em numero
//   const descricao = inDescricao.value;
//   const valor = Number(inValor.value);
// // valida dados
//   if(descricao == "" || isNaN(valor) || valor == 0){
//     alert("Informe os valores corretos...");
//     inDescricao.focus();
//     return;
//   }
// //add valores ao acumulador e ao contador
//   numContas++; // recebe ele mesmo + 1 -> é um contador
//   valTotal = valTotal + valor; // é um acumulador (acumula valores inseridos)
// // concatena as contas
//   resposta = resposta + descricao + " - R$ " + valor.toFixed(2) + "\n";
// //
//   outListaContas.textContent = resposta + "____________________________";
//   outTotal.textContent = numContas + " Conta(s) - Total R$ " + valTotal.toFixed(2);
// // limpa os conteudos
//   inDescricao.value = "";
//   inValor.value = "";
//   inDescricao.focus();
// }
// //cria botao e add evento ao clique
// const button = document.getElementById('btRegistrar');
// button.addEventListener('click', registrarConta);
