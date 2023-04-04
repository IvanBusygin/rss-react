/* eslint-disable react/button-has-type */
import styles from './button.module.scss';

interface IButton {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children?: string;
}

function Button(props: IButton) {
  const { type, onClick, children } = props;
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: null,
  children: null,
  type: 'button',
};

export default Button;
