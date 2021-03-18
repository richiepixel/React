const persona = {
  nombre: 'Peter',
  apellido: 'Parker',
  edad: 35,
  direccion: {
    ciudad: 'New York',
    zipCode: 54090,
    lat: 14.32,
    lng: 34.9
  },
};

console.log( persona  )
//console.table( persona )

//const persona2 = persona
const persona2 = {...persona}
persona2.nombre = 'Miles'
console.log(persona2)
console.log(persona)