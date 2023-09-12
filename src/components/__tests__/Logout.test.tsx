import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LogoutComponet from '../NavigationBar/TopBarDropdown';


test('Redirect after successful logout', async () => {
  const { getByTestId  } = render(
      <MemoryRouter>
      <LogoutComponet />
    </MemoryRouter>
  );

  const logoutButton = getByTestId('logout-button');

  fireEvent.click(logoutButton);
  
  await waitFor(() => {
    expect(window.location.pathname).toBe('/'); // Check if the user is redirected to login page
  });
});

