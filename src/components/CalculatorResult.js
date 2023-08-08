import PropTypes from 'prop-types';

export default function CalculatorResult({ result }) {
  return <input className="calculator-result" type="text" value={result} readOnly />;
}

CalculatorResult.defaultProps = {
  result: 0,
};

CalculatorResult.propTypes = {
  result: PropTypes.number,
};
