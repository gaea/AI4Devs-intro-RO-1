function invertirTexto() {
  const texto = document.getElementById('inputText').value;
  const invertido = texto.split('').reverse().join('');
  document.getElementById('resultado').value = invertido;
}

function copiarTexto() {
  const resultado = document.getElementById('resultado');
  resultado.select();
  resultado.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Texto copiado: ' + resultado.value);
}