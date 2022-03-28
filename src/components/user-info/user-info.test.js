import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import UserInfoComponent from './user-info';

beforeEach(() => {
  render(<UserInfoComponent props />);
});

test('renders content', () => {
  const content = screen.getByText(/follows/i);
  expect(content).toBeInTheDocument();
});

test('render the button to edit profile', () => {
  const btnEl = screen.getByRole('button', { name: /edit profile/i });

  expect(btnEl).toBeInTheDocument();
});
