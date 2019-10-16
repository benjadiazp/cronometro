var h1 = document.getElementsByTagName('h1')[0];
var boton = document.getElementById('btn');
var reiniciar = document.getElementById('btn-reiniciar');
var aumentar = document.getElementById('btn-aumentar');
var reducir = document.getElementById('btn-reducir');
var pantallaCompleta = document.getElementById('btn-pantallacompleta');
var segundos = 0, minutos = 0, horas = 0, t;
var estado = 0;
var tamanioFuente = 200;
var modoPantallaCompleta = false;
function sumar() {
  segundos++;
  if (segundos >= 60) {
    segundos = 0;
    minutos++;
    if (minutos >= 60) {
      minutos = 0;
      horas++;
    }
  }

  h1.textContent = (horas ? (horas > 9 ? horas : "0" + horas) : "00") + ":" + (minutos ? (minutos > 9 ? minutos : "0" + minutos) : "00") + ":" + (segundos > 9 ? segundos : "0" + segundos);

  timer();
}

function timer() {
  t = setTimeout(sumar, 1000);
  boton.textContent = "Pausa";
  boton.style.backgroundColor = "coral";
}

boton.onclick = function () {
  switch (estado) {
    case 0: estado = 1;
      timer();
      break;
    case 1: estado = 2;
      clearTimeout(t);
      boton.textContent = "Continuar"
      boton.style.backgroundColor = "yellow";
      estado = 0;
      break;
  }

}

reiniciar.onclick = function () {
  h1.textContent = "00:00:00";
  segundos = 0; minutos = 0; horas = 0;
  estado = 0;
  boton.textContent = "Comenzar"
  boton.style.backgroundColor = "limegreen;";
}

aumentar.onclick = function () {
  tamanioFuente += 10;
  h1.style.fontSize = tamanioFuente + "px";
}

reducir.onclick = function () {
  tamanioFuente -= 10;
  h1.style.fontSize = tamanioFuente + "px";
}

pantallaCompleta.onclick = function () {
  var elem = document.documentElement;
  if (!modoPantallaCompleta) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    modoPantallaCompleta = true;
  }
  else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    modoPantallaCompleta = false;
  }
}