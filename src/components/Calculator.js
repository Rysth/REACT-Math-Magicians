import PropTypes from 'prop-types';
import './Calculator.css';

const calculatorButtons = [
  { id: 0, content: 'AC' },
  { id: 1, content: '+/-' },
  { id: 2, content: '%' },
  { id: 3, content: '÷' },
  { id: 4, content: '7' },
  { id: 5, content: '8' },
  { id: 6, content: '9' },
  { id: 7, content: 'x' },
  { id: 8, content: '4' },
  { id: 9, content: '5' },
  { id: 10, content: '6' },
  { id: 11, content: '-' },
  { id: 12, content: '1' },
  { id: 13, content: '2' },
  { id: 14, content: '3' },
  { id: 15, content: '+' },
  { id: 16, content: '0' },
  { id: 17, content: '.' },
  { id: 18, content: '=' },
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
  return <input className="calculator-result" type="text" value={result} />;
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
        <CalculatorButton key={element.id} content={element.content} />
      ))}
    </div>
  );
}

CalculatorGroup.defaultProps = {
  array: [],
};

CalculatorGroup.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string),
};

function CalculatorButton({ content }) {
  return (
    <button type="button" className="calculator-button">
      {content}
    </button>
  );
}

CalculatorButton.defaultProps = {
  content: '',
};

CalculatorButton.propTypes = {
  content: PropTypes.string,
};
