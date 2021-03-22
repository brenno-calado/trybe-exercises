import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Testing email input:', () => {
  it('checks if email input is rendered', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  it('checks if a send button is rendered', () => {
    render(<App />);
    const sendBtn = screen.getByTestId('id-send');
    expect(sendBtn).toBeInTheDocument();
    expect(sendBtn.type).toBe('button');
    expect(sendBtn).toHaveValue('Enviar');
  });
  it('checks if two buttons exist', () => {
    render(<App />);
    const btns = screen.getAllByRole('button');
    expect(btns.length).toBe(2);
  });
  it('checks if email input is shown when send button is clicked', () => {
    render(<App />);
    const emailInput = screen.getByLabelText('Email');
    const sendBtn = screen.getByTestId('id-send');
    const userEmail = screen.getByTestId('id-email-user');
    // digitar, clicar, conferir
    fireEvent.change(emailInput, { target: { value: 'xablau@smith.com'}});
    fireEvent.click(sendBtn);

    expect(userEmail).toHaveTextContent('Email salvo: xablau@smith.com');
    expect(emailInput).toHaveValue('')
  })
})
