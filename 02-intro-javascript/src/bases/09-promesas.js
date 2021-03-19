import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     //reject(heroe);
//     //reject('No se pudo encontrar el heróe')
//   }, 2000)
// });

// promesa.then((h) => {
//   console.log(h);
// })
//   .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      }
      else {
        reject('No se pudo encontrar el heroe');
      }
    }, 2000)
  });
}
getHeroeByIdAsync(2)
  .then(console.log) //Es lo mismo que .then((heroe) => console.log('Heroe: ', heroe))
  .catch(console.warn) //Es lo mismo que .catch(err => console.warn(err))
