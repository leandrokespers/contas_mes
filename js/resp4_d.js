function criarEstrelas(){
  //guarada os IDs em variaveis
  const inLinhas = document.getElementById('inLinhas');
  const outResposta = document.getElementById('outResposta');

// converte linhas em numero
  const linhas = Number(inLinhas.value);
//valida os dados
  if(linhas == 0 || isNaN(linhas)){
    alert("Informe valores corretos...");
    inLinhas.focus();
    return;
  }
//variavel que recebera a resposta
  let estrelas = "";
//loop no eixo x e y i & j para os elementos crescerem na horizonotal e vertical (linhas e *)
  for(let i = 1; i <= linhas; i++){
    for(let j = 1; j <= i; j++){
      estrelas = estrelas + "*";
    }
    estrelas = estrelas + "\n"; // retorna a resposta com quebra de linha
  }
//retorna na tela a resposta
  outResposta.textContent = estrelas;
}
// cria o botao e add evento ao clique
const button = document.getElementById('btCriar');
button.addEventListener('click', criarEstrelas);











// function criarEstrelas() {
//   var inLinhas = document.getElementById("inLinhas");
//   var outResposta = document.getElementById("outResposta");

//   var linhas = Number(inLinhas.value);

//   if (linhas == 0 || isNaN(linhas)) {
//     alert("Informe um número válido");
//     inLinhas.focus();
//     return;
//   }

//   // variável que irá concatenar as estrelas
//   var estrelas = "";

//   // cria uma repetição (até o número de linhas informado)
//   for (var i = 1; i <= linhas; i++) {
//     // dentro dessa repetição é criada uma outra (para cada linha, até i)
//     for (var j = 1; j <= i; j++) {
//       estrelas = estrelas + "*"
//     }
//     estrelas = estrelas + "\n";     // faz uma quebra de linha
//   }

//   outResposta.textContent = estrelas;
// }
// var btCriar = document.getElementById("btCriar");
// btCriar.addEventListener("click", criarEstrelas);