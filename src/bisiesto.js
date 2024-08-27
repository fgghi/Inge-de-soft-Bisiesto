function generarBisiesto(year) {
  if (year % 400 == 0) {
      return "Bisiesto";
  } else if (year % 100 == 0) {
      return "No bisiesto";
  } else if (year % 4 == 0) {
      return "Bisiesto";
  } else {
      return "No bisiesto";
  }
}

export default generarBisiesto;

