function mostrarTabuada(){
  //cria referencia aos elementos da pagina
  var inNumero = document.getElementById("inNumero");
  var outTabuada = document.getElementById("outTabuada");


  //converte conteudo do campo inNumero

  var numero = Number(inNumero.value);

  //valida numero
  if(numero == 0 || isNan(numero)){
    alert("Informe um numero valido");
    inNumero.focus();
    return;
  }

  var resposta = "";

  //cria um laço de repeticao

  for(var i = 1;i <=10;i++){
    resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
  }

outTabuada.textContent = resposta;

}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarTabuada);



















// function mostrarTabuada(){
//   const inNumero = document.getElementById('inNumero');
//   const outTabuada = document.getElementById('outTabuada');

//   const numero = Number(inNumero.value);

//   if(numero === 0 || isNaN(numero)){
//     alert("Digite um numero válido...");
//     inNumero.focus();
//     return;
//   }

//   let resposta = "";

//   for(i = 1; i <= 10; i++){
//     resposta = `${resposta + numero} x ${i} = ${numero * i} "\n"`;
//   }

//   outTabuada.textContent = resposta;
// }

// const button = document.getElementById("btMostrar");
// button.addEventListener('click', mostrarTabuada);

// let resposta2 = "";
// for(i = 1; i <= 10; i++){
//   for(j = 1; j <= 10; j++){
//     resposta2 = `${resposta2 + i} x ${j} = ${i * j} \n`;
//   }
// }

// console.log(resposta2);