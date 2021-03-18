//Desestructuración
//Asignación desetructurante
const persona = {
  nombre: 'Jay',
  apellido: 'Halstead',
  edad: 30,
  clave: '50-21 George'
}

const { nombre, apellido, edad, clave } = persona

console.log(nombre)
console.log(apellido)
console.log(edad)
console.log(clave)
/* console.log('nombre: ', persona.nombre)
console.log('apellido: ', persona.apellido) */

const retornaPersona = (usuario) => {
  const { nombre, apellido, edad, clave } = usuario
  console.log(nombre, edad)
}

const retornaPersona2 = ({ nombre, edad, rango = 'Detective' }) => {
  console.log(nombre, edad, rango)
}

const useContext = ({ clave, nombre, edad, rango }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.12,
      lng: 15.15
    }
  }
}

//const detective = useContext(persona)
const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona)
console.log('nombreClave: ', nombreClave)
console.log('anios: ', anios)
console.log('lat: ', lat)
console.log("lng: ", lng)