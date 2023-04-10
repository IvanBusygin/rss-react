/* eslint-disable react/button-has-type */
import cln from 'classnames';
import styles from './button.module.scss';

interface IButton {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children?: string;
  className?: string;
  dataTestId?: string;
}

function Button(props: IButton) {
  const { dataTestId, className, type, onClick, children } = props;
  return (
    <button
      className={cln(styles.button, className)}
      type={type}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: null,
  children: null,
  type: 'button',
  className: '',
  dataTestId: '',
};

export default Button;
