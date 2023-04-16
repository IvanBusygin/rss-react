import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import FormPage from './FormPage';

describe('Form page component', () => {
  it('should render form page', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>,
    );
    expect(screen.getByText(/List User/i)).toBeInTheDocument();
  });
});
