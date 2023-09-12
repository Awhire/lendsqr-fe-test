import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../pages/Login';

test('Login component renders text', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const textElementOne = getByText('Welcome!');
  const textElementTwo = getByText('Enter details to login.');
  expect(textElementOne).toBeInTheDocument();
  expect(textElementTwo).toBeInTheDocument();
});



