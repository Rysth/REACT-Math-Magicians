import PropTypes from 'prop-types';

export default function CalculatorButton({ content, classValue, onHandleClick }) {
  const classList = `calculator-button ${classValue}`;
  return (
    <button type="button" className={classList} onClick={onHandleClick}>
      {content}
    </button>
  );
}

CalculatorButton.defaultProps = {
  content: '',
  classValue: '',
  onHandleClick: () => '',
};

CalculatorButton.propTypes = {
  content: PropTypes.string,
  classValue: PropTypes.string,
  onHandleClick: PropTypes.func,
};
