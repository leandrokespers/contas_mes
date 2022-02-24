function repetirFruta(){
  //guarda o IDs nas variaveis abaixo
  const inFruta = document.getElementById('inFruta');
  const inNumero = document.getElementById('inNumero');
  const outResposta = document.getElementById('outResposta');
//converte os dados
  let fruta = inFruta.value;
  let numero = Number(inNumero.value);
//valida os dados
  if(fruta == "" || numero == 0 || isNaN(numero)){
    alert("Informe os dados corretos. Digite novamente...");
    inFruta.focus();
    return;
  }
  //cria variavel que armazenará a resposta
  let resposta = "";
// loop que repetira a fruta de acordo com o numero
  for(let i = 1; i < numero; i++){
    resposta = resposta + fruta + " * ";
    }

    resposta = resposta + fruta;
// retorna na tela a resposta em text
    outResposta.textContent = resposta;
}
// cria botao e evento ao clique
const button = document.getElementById('btRepetir');
button.addEventListener('click', repetirFruta);







// function repetirFruta() {
//   var inFruta = document.getElementById("inFruta");
//   var inNumero = document.getElementById("inNumero");
//   var outResposta = document.getElementById("outResposta");

//   var fruta = inFruta.value;
//   var num = Number(inNumero.value);

//   if (fruta == "" || num == 0 || isNaN(num)) {
//     alert("Informe corretamente os dados");
//     inFruta.focus();
//     return;
//   }

//   // variável que vai acumular o número repetido das frutas
//   var resposta = "";   

//   // cria uma repetição e...
//   for (var i=1; i<num; i++) {
//     // ... a cada volta, adiciona uma fruta
//     resposta = resposta + fruta + " * ";
//   }

//   // isola a última fruta, para não exibir * no final
//   resposta = resposta + fruta;

//   outResposta.textContent = resposta;
// }
// var btRepetir = document.getElementById("btRepetir");
// btRepetir.addEventListener("click", repetirFruta);