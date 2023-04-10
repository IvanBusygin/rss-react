/* eslint-disable jsx-a11y/label-has-associated-control */
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './form.module.scss';

interface IInputProps {
  label: string;
  accept?: string;
  errors?: FieldError | undefined;
  type?: 'text' | 'date' | 'checkbox' | 'radio' | 'file';
  register?: UseFormRegisterReturn;
}

function Input(props: IInputProps) {
  const { errors, type, accept, label, register } = props;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth().toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');

  return (
    <div>
      <label className={`${styles.label} ${errors} ? styles.invalid : ''}`}>
        {label}
        <input
          type={type}
          accept={accept}
          max={`${year}-${month}-${day}`}
          {...register}
        />
      </label>
      <div className={styles.error}>
        {errors && <p className={styles.error__msg}>{errors.message}</p>}
      </div>
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  accept: undefined,
  register: undefined,
  errors: undefined,
};

export default Input;
