import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
describe('Pruebas en el customHook useFetchGifs', () => {
  const category = 'Zelda';
  test('debe de retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    console.log(data, loading);

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('debe de retornar el arreglo de gifs y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    console.log(data, loading);

    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
