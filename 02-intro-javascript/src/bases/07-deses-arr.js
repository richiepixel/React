const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p2] = personajes

console.log(p2)

const retornaArreglo = () => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
  return [valor, () => {console.log('Hola Mundo')}];
}

const arr = useState('Goku')
arr[1]();

const [nombre, setNombre] = useState('Richie');
console.log('nombre: ', nombre);
setNombre();
