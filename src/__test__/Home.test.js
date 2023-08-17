import renderer from 'react-test-renderer';
import Home from '../components/Pages/Home';

describe('Home Page Component', () => {
  it('Should create a Home Page Component Snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
