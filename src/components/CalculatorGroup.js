import PropTypes from 'prop-types';
import CalculatorButton from './CalculatorButton';

export default function CalculatorGroup({ array, setButtonName }) {
  const onHandleClick = (event) => {
    setButtonName(event.target.innerText);
  };

  return (
    <div className="calculator-group">
      {array.map((element) => (
        <CalculatorButton
          key={element.id}
          classValue={element.classValue}
          content={element.content}
          onHandleClick={onHandleClick}
        />
      ))}
    </div>
  );
}

CalculatorGroup.defaultProps = {
  array: [],
  setButtonName: () => {},
};

CalculatorGroup.propTypes = {
  array: PropTypes.arrayOf(PropTypes.objectOf),
  setButtonName: PropTypes.func,
};
