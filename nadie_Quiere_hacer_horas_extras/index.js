const year = 1985;
const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']

function countHours(year, holidays) {
  var anno = year.toString();
  var diasMes, dias, horas, sema;
  let conta, fechasyear, feriados, fechafin;

  for (var mess = 0; mess <= 11; mess++) {
    //FOR DE MESES
    diasMes = new Date(anno, mess, 0).getDate();
    for (var dia = 1; dia <= diasMes; dia++) {
      //FOR DE DÍAS

      fechasyear = new Date(anno, mess, dia);
      fechafin = holidays.map((holidays) => {
        feriados = new Date(year + "/" + holidays);
        sema = feriados.getDay();
        if (sema != 0 && sema != 6) {
          if (feriados.getTime() == fechasyear.getTime()) {
            console.log(sema);
            conta = 1;
            console.log(conta)
            
          }
          return conta
        }
        
      });
    }
    
  }
  const diashoras = fechafin.filter( codigo => codigo === 1)
  let trab = diashoras.length;
  console.log(trab);
  dias = 1 * trab;
  horas = 2 * trab;
  return dias, horas;
}
/*
fechap = new Date("1985/12/25");
fechafin2 = holidays.map((holidays) => {
  feriados = new Date(year + "/" + holidays);

  return feriados;
});
console.log(fechafin2);*/
console.log(holidays.length);
console.log(countHours(year, holidays));
