import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../Components/GifGridItem';

const img = {
  title: 'legend of zelda GIF',
  url:
    'https://media2.giphy.com/media/5MjQ87rBCRIB2/giphy.gif?cid=52d5781amo7m364mwu12b47its9vkdcwnpqx9gndzfykpgyr&rid=giphy.gif',
};

describe('Pruebas en <GifGridItem />', () => {
  test('debe de mostrar el componente correctamente', () => {
    const wrapper = shallow(<GifGridItem {...img} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un párrafo con el title', () => {
    const wrapper = shallow(<GifGridItem title={img.title} url={img.url} />);
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(img.title);
  });

  test('debe de tener la imagen igual al url y alt de los props', () => {
    const wrapper = shallow(<GifGridItem {...img} />);
    const imgTag = wrapper.find('img');

    expect(imgTag.props().src).toBe(img.url);
    expect(imgTag.prop('alt')).toBe(img.title);
  });

  test('debe de tener la className animate__fadeInDown', () => {
    const wrapper = shallow(<GifGridItem title={img.title} url={img.url} />);
    const div = wrapper.find('div');
    expect(div.is('.animate__fadeInDown')).toBeTruthy();
  });
});
