import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('tests joke', () => {
  it('fetches the joke, the App displays the joke', async () => {
    const joke = {
      id: '5e',
      joke: 'Whiteboards ... are remarkable',
      status: 200,
    };
  
    global.fetch = jest.fn(async () => ({ json: async () => (joke)}));
  
    render(<App />);
    await screen.findByText('Whiteboards ... are remarkable');
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
  });
});

describe('tests inputs', () => {
  it('alters input values and saves', () => {
    render(<App />);
    const nameInput = screen.getByTestId('name-input');
    expect(nameInput).toHaveValue('');
    fireEvent.change(nameInput, { target: {value: 'Tryber'}});
    expect(nameInput).toHaveValue('Tryber');
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toHaveValue('');
    fireEvent.change(emailInput, { target: {value: 'trybe9ner@trybe.com'}});
    expect(emailInput).toHaveValue('trybe9ner@trybe.com');
  });
})
