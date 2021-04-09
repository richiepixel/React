import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
  test('debe de traer 10 elementos', async () => {
    const gifs = await getGifs('Zelda');
    expect(gifs.length).toBe(10);
  });
  test('debe de retornar un arreglo vacío cuando no se envía categoría ', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
