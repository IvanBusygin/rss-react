/* eslint-disable jsx-a11y/label-has-associated-control */
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './form.module.scss';

interface IInputProps {
  label: string;
  err?: boolean;
  errMsg?: string;
  accept?: string;
  type?: 'text' | 'date' | 'checkbox' | 'radio' | 'file';
  register?: UseFormRegisterReturn;
}

function Input(props: IInputProps) {
  const { type, accept, label, errMsg, err, register } = props;

  return (
    <div>
      <label className={`${styles.label} ${err ? styles.invalid : ''}`}>
        {label}
        <input
          type={type}
          accept={accept}
          {...register}
        />
      </label>
      <div className={styles.error}>{err && <p className={styles.error__msg}>{errMsg}</p>}</div>
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  accept: undefined,
  err: undefined,
  errMsg: undefined,
  register: undefined,
};

export default Input;
