//Funciones en JS
const saludar = function (nombre) {
  return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`

const saludar4 = () => `Hola Mundo!`

console.log(saludar('Richie'))
console.log(saludar2('Richie'))
console.log(saludar3('Richie'))
console.log(saludar4())

const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'richie_pixel'
  }
}

const getUser2 = () =>
({
  uid: 'ABC123',
  username: 'richie_pixel'
});

console.log(getUser())
console.log(getUser2())

function getUsuarioActivo(nombre) {
  return {
    uid: 'ABC567',
    username: nombre,
  }
};

const getUsuarioActivo2 = (nombre) => ({
  uid: 'ABC123',
  username: nombre,
});

const usuarioActivo = getUsuarioActivo('Richie');
const usuarioActivo2 = getUsuarioActivo2('Richie2')
console.log('usuario activo: ', usuarioActivo);
console.log('usuario activo2: ', usuarioActivo2)