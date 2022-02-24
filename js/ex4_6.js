function verificarPrimo(){
  const inNumero = document.getElementById('inNumero');
  const outResposta = document.getElementById('outResposta');

  const num = Number(inNumero.value);

  if(num == 0 || isNaN(num)){
    alert("Informe o numero corretamente...");
    inNumero.focus();
    return;
  }

  let numDivisores = 0;

  for(let i = 1; i <= num; i++){
    if(num % i == 0){
      numDivisores++;
    }
  }


  if(numDivisores == 2){
    outResposta.textContent = num + " É primo";
  } else {
    outResposta.textContent = `${num} Não é primo`;
  }
}

const button = document.getElementById('btVerificarPrimo');
button.addEventListener('click', verificarPrimo);