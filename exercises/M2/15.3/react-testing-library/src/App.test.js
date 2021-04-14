import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import App from './App';
import About from './About'
import renderWithRouter from './renderWithRouter';

test('App', () => {
  renderWithRouter(<App />);
  const home = screen.getByText('Homepage');
  expect(home).toBeInTheDocument();
});

test('render About through click', () => {
  const { history } = renderWithRouter(<App />);
  fireEvent.click(screen.getByText(/About/i));
  const pathname = history.location.pathname;
  expect(pathname).toBe('/about');
  expect(screen.getByText(/About page/)).toBeInTheDocument();
});

test('No match found', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pagina-que-nao-existe');
  expect(screen.getByText(/Page not found/)).toBeInTheDocument();
});

test('render About only', () => {
  renderWithRouter(<About />);
  expect(screen.getByText(/About page/)).toBeInTheDocument();
})
