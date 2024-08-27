function generarBisiesto(año) {
  if (año % 400 == 0) {
      return "Bisiesto";
  } else if (año % 100 == 0) {
      return "No bisiesto";
  } else if (año % 4 == 0) {
      return "Bisiesto";
  } else {
      return "No bisiesto";
  }
}

export default generarBisiesto;
