import Calculator from './components/Calculator';
import Quote from './components/Quote/Quote';
import Navbar from './components/Navbar/Navbar';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Calculator />
      <Quote />
    </div>
  );
}
