import { render, screen } from '@testing-library/react';
import Stories from '../../components/stories';

test('renders learn react link', () => {
  render(<Stories />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});