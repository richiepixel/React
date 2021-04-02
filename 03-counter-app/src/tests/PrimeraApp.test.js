import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
  // test('debe de mostrar el mensaje Hola Richie!', () => {
  //   const saludo = 'Hola Richie!';

  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola Richie!';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el saludo enviado por props', () => {
    const saludo = 'Hola Richie';
    const subtitulo = 'Hola subtitulo';
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper.find('p').text();
    console.log(textoParrafo);
    expect(textoParrafo).toBe(subtitulo);
  });
});
