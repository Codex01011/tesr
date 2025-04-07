import { render, screen } from '@testing-library/react';
import App from './App';

test('renders This is my Jenkins App text', () => {
  render(<App />);
  const textElement = screen.getByText(/This is my Jenkins App/i);
  expect(textElement).toBeInTheDocument();
});
