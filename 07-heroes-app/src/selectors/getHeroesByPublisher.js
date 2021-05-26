import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
  const validPiublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPiublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}"  no es válido`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
