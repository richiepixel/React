import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-strings.js', () => {
  test('getSaludo debe de retornar Hola Richie!', () => {
    const nombre = 'Richie';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola ' + nombre + '!');
  })
  test('getSaludo debe de retornar Hola Yoshi! si no hay argumento nombre', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Yoshi!');
  })
})

