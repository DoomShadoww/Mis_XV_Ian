// Fecha de la cuenta regresiva (formato: año, mes (0-11), día, hora, minuto, segundo)
var countdownDate = new Date(2023, 7, 4, 17, 0, 0).getTime();

// Actualizar la cuenta regresiva cada segundo
var countdownInterval = setInterval(function() {

  // Obtener la fecha y hora actual
  var now = new Date().getTime();

  // Calcular la diferencia entre la fecha de la cuenta regresiva y la fecha actual
  var distance = countdownDate - now;

  // Calcular los días, horas, minutos y segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar la cuenta regresiva en el elemento HTML correspondiente
  document.getElementById("countdown").innerHTML = "Faltan: " + days + " días, " + hours + " horas, " + minutes + " minutos y " + seconds + " segundos.";

  // Si la cuenta regresiva ha terminado, mostrar un mensaje
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "¡La cuenta regresiva ha terminado!";
  }
  
}, 1000);

