import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Daniel Eno', () => {
  render(<App />);
  const textElement = screen.getByText(/This is my Jenkins App/i);
  expect(textElement).toBeInTheDocument();
});
