var lavadora = {
  Encendido: 0,
  Agua: 0,
  Lavado: "",
  Tiempo: 00,
  Enjuague: 0,
  Lavar: 0,
};

function Encender() {
  Led1 = document.getElementById("Led1");
  encendido = lavadora.Encendido;
  switch (encendido) {
    case encendido == 0:
      encendido++;
      console.log(encendido);
      document.getElementById("encender").classList.remove("encendido");
      document.getElementById("encender").classList.add("apagado");

      break;
    case encendido == 1:
      encendido++;
      document.getElementById("encender").classList.add("encendido");
      document.getElementById("encender").classList.remove("apagado");
      break;
    case encendido >= 2:
      encendido = 0;
      document.getElementById("encender").classList.remove("encendido");
      document.getElementById("encender").classList.add("apagado");
      break;
    default:
      break;
  }
}
