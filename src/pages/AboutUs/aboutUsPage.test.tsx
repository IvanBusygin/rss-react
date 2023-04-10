import { render, screen } from '@testing-library/react';
import AboutUsPage from './AboutUsPage';

describe('AboutUs component', () => {
  it('should render about', () => {
    render(<AboutUsPage />);
    expect(screen.getByText(/Ivan Busygin/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Certificate/i)).toBeInTheDocument();
  });
});
