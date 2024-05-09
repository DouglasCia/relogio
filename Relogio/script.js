function atualizarTempo() {

  let display = document.querySelector('#horario');

  let relogio = new Date();
  let horario = corrigirHorario(relogio.getHours()) + ":" + corrigirHorario(relogio.getMinutes()) + ":" + corrigirHorario(relogio.getSeconds());

  display.textContent = horario;

}

function corrigirHorario(numero) {
  if (numero < 10) {
    numero = '0' + numero;
  }
  return numero;
}

atualizarTempo()
setInterval(atualizarTempo, 1000);
