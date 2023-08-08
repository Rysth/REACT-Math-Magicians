import PropTypes from 'prop-types';
import Calculator from './components/Calculator';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <Title text="Calculator App" />
      <Calculator />
    </div>
  );
}

function Title({ text }) {
  return <h1 className="title">{text}</h1>;
}

Title.defaultProps = {
  text: '',
};

Title.propTypes = {
  text: PropTypes.string,
};
