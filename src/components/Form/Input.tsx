/* eslint-disable jsx-a11y/label-has-associated-control */
import { RefObject } from 'react';
import styles from './form.module.scss';

interface IInputProps {
  label: string;
  err?: boolean;
  errMsg?: string;
  accept?: string;
  inputRef: RefObject<HTMLInputElement>;
  type?: 'text' | 'date' | 'checkbox' | 'radio' | 'file';
}

export default function Input(props: IInputProps) {
  const { type, accept, label, inputRef, errMsg, err } = props;

  return (
    <div>
      <label className={`${styles.label} ${err ? styles.invalid : ''}`}>
        {label}
        <input
          type={type}
          ref={inputRef}
          accept={accept}
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
};
