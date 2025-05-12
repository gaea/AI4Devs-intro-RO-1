document.getElementById('inputText').addEventListener('input', () => {
  const texto = document.getElementById('inputText').value;
  if (texto.length > 3) {
    const invertido = texto.split('').reverse().join('');
    document.getElementById('resultado').value = invertido;
  } else {
    document.getElementById('resultado').value = '';
  }
});

function copiarTexto() {
  const resultado = document.getElementById('resultado');
  resultado.select();
  resultado.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Texto copiado: ' + resultado.value);
}