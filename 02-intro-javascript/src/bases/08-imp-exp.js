//import { heroes } from './data/heroes';
//import heroes from './data/heroes' //Esta notación es cuando se hace un export default.
//import { heroes, owners } from './data/heroes'  //Esta notación se utiliza cuando hago un export múltiple y no expecífico un default.
import heroes, { owners } from '../data/heroes'


/* const getHeroeById = (id) => {
  return heroes.find((h) => h.id === id);
} */

const getHeroeById = (id) => heroes.find((h) => h.id === id);


console.log(getHeroeById(3));

const getHeroeByOwner = (owner) => heroes.filter((h) => h.owner === owner)

console.log(owners)

console.log(getHeroeByOwner('Marvel'));
