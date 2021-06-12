import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en <HeroScreen/>', () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  test('debe de mostrar el componente redirect si no hay argumentos en el url ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={history} />
      </MemoryRouter>
    );
    expect(wrapper.find('Redirect').exists()).toBeTruthy();
  });

  test('debe de mostrar un hero sí el parámetro existe y se encuentra ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('.row').exists()).toBeTruthy();
  });

  test('debe de regresar a la pantalla anterior con PUSH', () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroId"
          component={(props) => <HeroScreen history={history} />} //Los props son los del router
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();

    expect(history.push).toHaveBeenCalledWith('/');
    expect(history.goBack).not.toHaveBeenCalled();
  });

  test('debe de regresar a la pantalla anterioro GOBACK', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={history} />} //Los props no se indican pero ahí están
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    expect(history.goBack).toHaveBeenCalled();
    expect(history.push).not.toHaveBeenCalled();
  });

  test('NO debe de mostrar el componente si el hero no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider123']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={history} />} //Los props no se indican pero ahí están
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe('');
  });
});
