function generarBisiesto(year){
    if(year % 400 == 0&&year % 100 == 0)
        {
          year="Bisiesto"
        }
        else
        {
            year="No bisiesto"
        }
    return year+"";
  }
  
  export default generarBisiesto;
