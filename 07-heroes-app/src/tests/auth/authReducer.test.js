import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

const user = {
  name: 'Richie',
  logged: false,
};

describe('Pruebas en authReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = authReducer(user, {});
    expect(state).toEqual(user);
  });
  test('debe de autenticar y colocar el name del usuario', () => {
    const state = authReducer({}, { type: types.login, payload: user });
    expect(state).toEqual({ ...user, logged: true });
  });
  test('debe de borrar el nombre del usuario y logged en false', () => {
    user.logged = true;
    const state = authReducer(user, { type: types.logout });
    expect(state).toEqual({ logged: false });
  });
});
