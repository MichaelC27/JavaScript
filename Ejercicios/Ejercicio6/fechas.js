const actual_fecha = new Date();
console.log(actual_fecha);

const fecha_nacim = new Date(1996,5,27)
console.log(fecha_nacim)

const fechacomp= actual_fecha > fecha_nacim
console.log(fechacomp)

const dia = fecha_nacim.getDate();
console.log(dia)

const mes = fecha_nacim.getMonth()+1
console.log(mes)

const anyo = fecha_nacim.getFullYear()
console.log(anyo)