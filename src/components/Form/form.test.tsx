/* eslint-disable */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  const defaultProps = {
    onAddNewCard: vi.fn(),
  };

  test('should display form title', () => {
    render(<Form {...defaultProps} />);
    const formTitle = screen.getByText('Add new card');
    expect(formTitle).toBeInTheDocument();
  });

  test('should render all form fields', () => {
    render(<Form {...defaultProps} />);
    const nameInput = screen.getByLabelText('Name');
    expect(nameInput).toBeInTheDocument();

    const surnameInput = screen.getByLabelText('Surname');
    expect(surnameInput).toBeInTheDocument();

    const dateInput = screen.getByLabelText('Birthday');
    expect(dateInput).toBeInTheDocument();

    const selectInput = screen.getByLabelText('Your preferred framework');
    expect(selectInput).toBeInTheDocument();

    const checkboxInput = screen.getByLabelText('Need a job?');
    expect(checkboxInput).toBeInTheDocument();

    const fileInput = screen.getByLabelText('Your Photo');
    expect(fileInput).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
  });
});
