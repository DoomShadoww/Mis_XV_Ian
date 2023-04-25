



////var audio = document.getElementById("myAudio"); 
//function reproducirAudio() { 
//  audio.play(); 
//} 
//document.getElementById("myButton").addEventListener("click", reproducirAudio);
//audio.addEventListener('ended', function() {
//  var xmlhttp = new XMLHttpRequest();
//  xmlhttp.onreadystatechange = function() {
//    console.log("readyState: " + this.readyState + ", status: " + this.status); // Agregamos este console.log()
//    if (this.readyState == 4 && this.status == 200) {
//      var respuesta = this.responseText;
//      console.log(respuesta);
//      var paginaNueva = document.createElement('html');
//      paginaNueva.innerHTML = respuesta;
//      var nuevaCancion = paginaNueva.getElementById('myAudio');
//      nuevaCancion.play();
//      window.history.pushState({'html':respuesta},'','home.html');
//    }
//  };
//  xmlhttp.open("GET", "home.html", true);
//  xmlhttp.send();
//});


// Obtener el reproductor de audio y el botón
const audio = document.getElementById('myAudio');
const button = document.getElementById('myButton');

// Manejar el clic en el botón
button.addEventListener('click', () => {
  // Si el audio está pausado, reproducirlo y cambiar el texto del botón
  if (audio.paused) {
    audio.play();
    button.textContent = 'Pausar audio';
  } else {  // Si el audio está reproduciéndose, pausarlo y cambiar el texto del botón
    audio.pause();
    button.textContent = 'Reproducir audio';
  }
});

// Guardar el tiempo actual de la canción en sessionStorage antes de redirigir a otra página
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('audioTime', audio.currentTime);
});


const audio2 = document.getElementById('myAudio2');
const button2 = document.getElementById('myButton2');

// Manejar el clic en el botón
button.addEventListener('click', () => {
  // Si el audio está pausado, reproducirlo y cambiar el texto del botón
  if (audio.paused) {
    audio.play();
    button.textContent = 'Pausar audio';
  } else {  // Si el audio está reproduciéndose, pausarlo y cambiar el texto del botón
    audio.pause();
    button.textContent = 'Reproducir audio';
  }
});

// Guardar el tiempo actual de la canción en sessionStorage antes de redirigir a otra página
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('audioTime', audio.currentTime);
});


