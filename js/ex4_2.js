function listarNumeros(){
  const inNumero = document.getElementById('inNumero');
  const outResposta = document.getElementById('outResposta');

  const numero = Number(inNumero.value);

  if(numero == 0 || isNaN(numero)){
    alert("Informe o valor correto...");
    inNumero.focus();
    return;
  }

  var resposta = "Entre " + numero + " e 1: " + numero;

  for(let i = numero - 1; i > 0; i--){
    resposta = resposta + "," + i;
  }

  outResposta.textContent = resposta;
}

const button = document.getElementById('btDecrescer');
button.addEventListener('click', listarNumeros);