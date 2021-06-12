import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en <AppRouter/>', () => {
  const contextValue = {
    user: { logged: false },
    dispatch: jest.fn(),
  };

  test('debe de mostrar login si no está autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el componente marvel sí está autenticado', () => {
    const contexttmp = { ...contextValue, user: { logged: true }, name: 'Richie' };
    const wrapper = mount(
      <AuthContext.Provider value={contexttmp}>
        <AppRouter />
      </AuthContext.Provider>
    );
    // console.log(wrapper.html());
    expect(wrapper.find('.navbar')).toBeTruthy();
  });
});
