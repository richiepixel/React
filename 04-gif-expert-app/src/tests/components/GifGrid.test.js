import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../Components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebuas en <GifGrid u/>', () => {
  const category = 'Zelda';
  test('debe de mostrar el componente correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan imágenes con useFetchGifs', () => {
    const gifs = [
      {
        id: 'zelda1',
        title: 'legend of zelda GIF',
        url:
          'https://media2.giphy.com/media/5MjQ87rBCRIB2/giphy.gif?cid=52d5781amo7m364mwu12b47its9vkdcwnpqx9gndzfykpgyr&rid=giphy.gif',
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
