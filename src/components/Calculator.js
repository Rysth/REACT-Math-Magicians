import { useState, useEffect } from 'react';
import CalculatorResult from './CalculatorResult';
import CalculatorGroup from './CalculatorGroup';
import calculate from '../logic/Calculate';
import './Calculator.css';

const calculatorButtons = [
  { id: 0, classValue: '', content: 'AC' },
  { id: 1, classValue: '', content: '+/-' },
  { id: 2, classValue: '', content: '%' },
  { id: 3, classValue: 'operation', content: '÷' },
  { id: 4, classValue: '', content: '7' },
  { id: 5, classValue: '', content: '8' },
  { id: 6, classValue: '', content: '9' },
  { id: 7, classValue: 'operation', content: 'x' },
  { id: 8, classValue: '', content: '4' },
  { id: 9, classValue: '', content: '5' },
  { id: 10, classValue: '', content: '6' },
  { id: 11, classValue: 'operation', content: '-' },
  { id: 12, classValue: '', content: '1' },
  { id: 13, classValue: '', content: '2' },
  { id: 14, classValue: '', content: '3' },
  { id: 15, classValue: 'operation', content: '+' },
  { id: 16, classValue: 'expanded', content: '0' },
  { id: 17, classValue: '', content: '.' },
  { id: 18, classValue: 'operation', content: '=' },
];

export default function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: 0,
    next: '',
    operation: '',
  });
  const [buttonName, setButtonName] = useState('');
  const [result, setResult] = useState(0);

  useEffect(() => {
    const updatedData = calculate(calculatorData, buttonName);
    setCalculatorData(updatedData);
    const totalValue = Number.parseFloat(updatedData.total);
    const nextValue = Number.parseFloat(updatedData.next);

    /* Check if both variables are numbers. */
    if (Number.isNaN(totalValue) && Number.isNaN(nextValue)) {
      setResult(0);
      return;
    }

    /* Check if totalValue is a Number and the Button Symbol is equal. */
    if (!Number.isNaN(totalValue) && buttonName === '=') {
      setResult(totalValue);
      return;
    }

    /*  Check if nextValue is a Number. */
    if (!Number.isNaN(nextValue)) {
      setResult(nextValue);
    }
  }, [buttonName]);

  return (
    <>
      <div>
        <h3 className="calculator-title">Let&apos;s do some Math</h3>
      </div>
      <div className="calculator">
        <CalculatorResult result={result} />
        <div className="calculator-body">
          <CalculatorGroup array={calculatorButtons.slice(0, 4)} setButtonName={setButtonName} />
          <CalculatorGroup array={calculatorButtons.slice(4, 8)} setButtonName={setButtonName} />
          <CalculatorGroup array={calculatorButtons.slice(8, 12)} setButtonName={setButtonName} />
          <CalculatorGroup array={calculatorButtons.slice(12, 16)} setButtonName={setButtonName} />
          <CalculatorGroup array={calculatorButtons.slice(16, 19)} setButtonName={setButtonName} />
        </div>
      </div>
    </>
  );
}
