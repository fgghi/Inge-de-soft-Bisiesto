function generarBisiesto(anio) {
  if (anio % 400 == 0) {
      return "Bisiesto";
  } else if (anio % 100 == 0) {
      return "No bisiesto";
  } else if (anio % 4 == 0) {
      return "Bisiesto";
  } else {
      return "No bisiesto";
  }
}

export default generarBisiesto;
