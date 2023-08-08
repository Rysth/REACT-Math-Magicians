import PropTypes from 'prop-types';
import CalculatorButton from './CalculatorButton';

export default function CalculatorGroup({ array }) {
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
