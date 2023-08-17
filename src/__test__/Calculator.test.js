import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator Component', () => {
  it('Should create a Calculator Component Snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
