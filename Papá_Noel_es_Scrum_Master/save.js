function getCompleted(part, total) {
  let hora_inicial = "00:00:00";
  let fech_in = new Date("1970-01-01T" + hora_inicial + "");
  let partTime = new Date("1970-01-01T" + part + "");
  let totalTime = new Date("1970-01-01T" + total + "");
  let time_tra = Math.trunc((partTime.getTime() - fech_in.getTime()) / 60000);
  let time_por_tra = Math.trunc(
    (totalTime.getTime() - fech_in.getTime()) / 60000
  );

    return  `${Math.trunc(time_tra / time_tra)}/${Math.trunc(time_por_tra /time_tra)}`

}


console.log( ('02:00:00', '04:00:00') )
