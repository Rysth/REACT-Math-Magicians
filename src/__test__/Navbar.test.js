import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter to be used to work similar as a BrowserRouter to make the Link component work properly.
import Navbar from '../components/Navbar/Navbar';

describe('Navbar Component', () => {
  test('Should simulate a click to the Home Page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const homeLink = getByText('Home');
    fireEvent.click(homeLink);
    expect(homeLink).toHaveTextContent('Home');
  });

  it('Should create a Navbar Component Snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
