import PropTypes from 'prop-types';
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
  return (
    <div className="calculator">
      <CalculatorResult />
      <div className="calculator-body">
        <CalculatorGroup array={calculatorButtons.slice(0, 4)} />
        <CalculatorGroup array={calculatorButtons.slice(4, 8)} />
        <CalculatorGroup array={calculatorButtons.slice(8, 12)} />
        <CalculatorGroup array={calculatorButtons.slice(12, 16)} />
        <CalculatorGroup array={calculatorButtons.slice(16, 19)} />
      </div>
    </div>
  );
}

function CalculatorResult({ result }) {
  return <input className="calculator-result" type="text" value={result} readOnly />;
}

CalculatorResult.defaultProps = {
  result: 0,
};

CalculatorResult.propTypes = {
  result: PropTypes.number,
};

function CalculatorGroup({ array }) {
  return (
    <div className="calculator-group">
      {array.map((element) => (
        <CalculatorButton
          key={element.id}
          classValue={element.classValue}
          content={element.content}
        />
      ))}
    </div>
  );
}

CalculatorGroup.defaultProps = {
  array: [],
};

CalculatorGroup.propTypes = {
  array: PropTypes.arrayOf(PropTypes.objectOf),
};

function CalculatorButton({ content, classValue }) {
  const classList = `calculator-button ${classValue}`;

  return (
    <button type="button" className={classList}>
      {content}
    </button>
  );
}

CalculatorButton.defaultProps = {
  content: '',
  classValue: '',
};

CalculatorButton.propTypes = {
  content: PropTypes.string,
  classValue: PropTypes.string,
};
