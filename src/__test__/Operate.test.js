import operate from '../logic/Operate';

describe('Math Operations', () => {
  describe('SUM Operation', () => {
    const operation = '+';
    test('Passed two positive integers.', () => {
      const data = Number.parseInt(operate(1, 1, operation));
      expect(data).toBe(2);
    });
    test('Passed two negative integers.', () => {
      const data = Number.parseInt(operate(-1, -1, operation));
      expect(data).toBe(-2);
    });
    test('Passed one negative and one positive integer.', () => {
      const data = Number.parseInt(operate(-1, 1, operation));
      expect(data).toBe(0);
    });
    test('Passed two positive float.', () => {
      const data = Number.parseInt(operate(1.25, 1.25, operation));
      expect(data).toBe(2);
    });
    test('Passed two negative float.', () => {
      const data = Number.parseInt(operate(-1.25, -1.25, operation));
      expect(data).toBe(-2);
    });
    test('Passed null.', () => {
      try {
        expect(operate(null, null, operation)).toThrowError();
      } catch (error) {}
    });
  });

  describe('MINUS Operation', () => {
    const operation = '-';
    test('Passed two positive integers.', () => {
      const data = Number.parseInt(operate(1, 1, operation));
      expect(data).toBe(0);
    });
    test('Passed two negative integers.', () => {
      const data = Number.parseInt(operate(-1, -1, operation));
      expect(data).toBe(0);
    });
    test('Passed one negative and one positive integer.', () => {
      const data = Number.parseInt(operate(1, -1, operation));
      expect(data).toBe(2);
    });
    test('Passed two positive float.', () => {
      const data = Number.parseInt(operate(1.25, 1.25, operation));
      expect(data).toBe(0);
    });
    test('Passed two negative float.', () => {
      const data = Number.parseInt(operate(-1.25, -1.25, operation));
      expect(data).toBe(0);
    });
    test('Passed null.', () => {
      try {
        expect(operate(null, null, operation)).toThrowError();
      } catch (error) {}
    });
  });
  describe('MULTIPLY Operation', () => {
    const operation = 'x';
    test('Passed two positive integers.', () => {
      const data = Number.parseInt(operate(1, 1, operation));
      expect(data).toBe(1);
    });
    test('Passed two negative integers.', () => {
      const data = Number.parseInt(operate(-1, -1, operation));
      expect(data).toBe(1);
    });
    test('Passed one negative and one positive integer.', () => {
      const data = Number.parseInt(operate(1, -1, operation));
      expect(data).toBe(-1);
    });
    test('Passed two positive float.', () => {
      const data = Number.parseInt(operate(1.25, 1.25, operation));
      expect(data).toBe(1);
    });
    test('Passed two negative float.', () => {
      const data = Number.parseInt(operate(-1.25, -1.25, operation));
      expect(data).toBe(1);
    });
    test('Passed null.', () => {
      try {
        expect(operate(null, null, operation)).toThrowError();
      } catch (error) {}
    });
  });
  describe('DVISION Operation', () => {
    const operation = '÷';
    test('Passed two positive integers.', () => {
      const data = Number.parseInt(operate(1, 1, operation));
      expect(data).toBe(1);
    });
    test('Passed two negative integers.', () => {
      const data = Number.parseInt(operate(-1, -1, operation));
      expect(data).toBe(1);
    });
    test('Passed one negative and one positive integer.', () => {
      const data = Number.parseInt(operate(1, -1, operation));
      expect(data).toBe(-1);
    });
    test('Passed two positive float.', () => {
      const data = Number.parseInt(operate(1.25, 1.25, operation));
      expect(data).toBe(1);
    });
    test('Passed two negative float.', () => {
      const data = Number.parseInt(operate(-1.25, -1.25, operation));
      expect(data).toBe(1);
    });
    test('Passed a number divided by 0', () => {
      const data = operate(1, 0, operation);
      expect(data).toBe(`Can't divide by 0.`);
    });
    test('Passed null.', () => {
      try {
        expect(operate(null, null, operation)).toThrowError();
      } catch (error) {}
    });
  });
  describe('MODULO Operation', () => {
    const operation = '%';
    test('Passed two positive integers.', () => {
      const data = Number.parseInt(operate(1, 1, operation));
      expect(data).toBe(0);
    });
    test('Passed two negative integers.', () => {
      const data = Number.parseInt(operate(-1, -1, operation));
      expect(data).toBe(0);
    });
    test('Passed one negative and one positive integer.', () => {
      const data = Number.parseInt(operate(1, -1, operation));
      expect(data).toBe(0);
    });
    test('Passed two positive float.', () => {
      const data = Number.parseInt(operate(1.25, 1.25, operation));
      expect(data).toBe(0);
    });
    test('Passed two negative float.', () => {
      const data = Number.parseInt(operate(-1.25, -1.25, operation));
      expect(data).toBe(0);
    });
    test('Passed null.', () => {
      try {
        expect(operate(null, null, operation)).toThrowError();
      } catch (error) {}
    });
  });
});
