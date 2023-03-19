import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('AboutUs component', () => {
  it('should render about', () => {
    render(<AboutUs />);
    expect(screen.getByText(/Ivan Busygin/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Certificate/i)).toBeInTheDocument();
  });
});
