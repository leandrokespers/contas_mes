function preencherEstrelas(){
  //guarda os IDs em variaveis
  const inNumero = document.getElementById('inNumero');
  const outEspacos = document.getElementById('outEspacos');
//converte em numero
  let num = Number(inNumero.value);

  //valida dados
  if(num == 0 || isNaN(num)){
    alert('Numero inválido digite outro valor...');
    inNumero.focus();
    return;
  }
//cria variavel que reebera a resposta
  let estrelas = "";
//laco for para iterar nos numeros e imprimir os asteriscos em pares e tracos em impares
  for(let i = 1; i <= num; i++){
    if(i % 2 == 0){
      estrelas = estrelas + "*";
    } else {
      estrelas = estrelas + "-";
    }
  }
  // publica no browser
  outEspacos.textContent = estrelas;
}
// cria botao e aciona o evento
const button = document.getElementById('btPreencher');
button.addEventListener('click', preencherEstrelas);