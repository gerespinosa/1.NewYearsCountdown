const newYearString = "2025-01-01T00:00:00";
const newYear = new Date(newYearString);

console.log(newYear);

function countdown() {
  const reloj = document.getElementById("cuenta");
  let actualDate = new Date();
  let dif = newYear - actualDate;
  let segundos = Math.floor(dif / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  let restoSegundos = segundos % 60;
  let restoMinutos = minutos % 60;
  let restoHoras = horas % 24;

  let cadenaFormateada = `${dias}:${restoHoras}:${restoMinutos}:${restoSegundos}`;
  reloj.innerHTML = cadenaFormateada;
  console.log(cadenaFormateada);
  return cadenaFormateada;
}

setInterval(countdown, 1000);
