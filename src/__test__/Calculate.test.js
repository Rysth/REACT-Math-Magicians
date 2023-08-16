import calculate from '../logic/Calculate';

describe('Calculate Operations', () => {
  describe('Calculate Object with NULL information.', () => {
    const calculateObject = {
      total: null,
      next: null,
      operation: null,
    };

    test('Pressed the AC button.', () => {
      const newObject = calculate(calculateObject, 'AC');
      expect(newObject).toEqual({
        total: null,
        next: null,
        operation: null,
      });
    });

    test('Pressed the number 0 button.', () => {
      const newObject = calculate(calculateObject, '0');
      expect(newObject).toEqual({
        next: '0',
        total: null,
      });
    });

    test('Pressed the . button', () => {
      const newObject = calculate(calculateObject, '.');
      expect(newObject).toEqual({
        next: '0.',
        operation: null,
        total: null,
      });
    });

    test('Pressed the = button', () => {
      const newObject = calculate(calculateObject, '=');
      expect(newObject).toEqual({});
    });

    test('Pressed the +/- button', () => {
      const newObject = calculate(calculateObject, '+/-');
      expect(newObject).toEqual({});
    });
  });

  describe('Calculate Object with not NULL information.', () => {
    const calculateObject = {
      total: 0,
      next: '1',
      operation: '+',
    };

    test('Pressed the AC button.', () => {
      const newObject = calculate(calculateObject, 'AC');
      expect(newObject).toEqual({
        total: null,
        next: null,
        operation: null,
      });
    });

    test('Pressed the number 0 button.', () => {
      const newObject = calculate(calculateObject, '0');
      expect(newObject).toEqual({
        next: '10',
        operation: '+',
        total: 0,
      });
    });

    test('Pressed the = button', () => {
      const newObject = calculate(calculateObject, '=');
      expect(newObject).toEqual({
        next: null,
        operation: null,
        total: '1',
      });
    });

    test('Pressed the +/- button', () => {
      const newObject = calculate(calculateObject, '+/-');
      expect(newObject).toEqual({
        next: '-1',
        operation: '+',
        total: 0,
      });
    });
  });
});
