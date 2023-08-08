import PropTypes from 'prop-types';

export default function CalculatorButton({ content, classValue }) {
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
