import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav component', () => {
  it('should render nav', () => {
    render(
      <BrowserRouter>
        <Nav />;
      </BrowserRouter>,
    );
    expect(screen.getByText(/Main/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});
