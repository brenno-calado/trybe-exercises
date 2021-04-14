import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('email is valid.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});
test('email is invalid.', () => {
  const EMAIL_USER = 'emailsemarroba.com';
  render(<ValidEmail email={EMAIL_USER} />);
  const invalid = screen.getByText('Email Inválido');
  expect(invalid).toBeInTheDocument();
});