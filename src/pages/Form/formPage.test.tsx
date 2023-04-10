import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('Form page component', () => {
  it('should render form page', () => {
    render(<FormPage />);
    expect(screen.getByText(/List User/i)).toBeInTheDocument();
  });
});
