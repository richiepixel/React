import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Richie',
    email: 'richie.cedillo7@outlook.com',
  };

  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof values).toBe('object');
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('debe de cambiar el valor del formulario (cambiar name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Joyce',
        },
      });
    });

    const [values] = result.current;
    expect(values).toEqual({ ...values, name: 'Joyce' });
  });

  test('debe de restablecer el formulario con reset', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          value: 'Joyce',
        },
      });
      reset();
    });

    const [newValues] = result.current;
    expect(newValues).toEqual(initialForm);
  });
});
