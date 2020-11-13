import { render, screen } from '@testing-library/react';
import App from './App';

test('renders construction line', () => {
  render(<App />);
  const linkElement = screen.getByText(/Under Construction/i);
  expect(linkElement).toBeInTheDocument();
});
