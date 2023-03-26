/* eslint-disable jsx-a11y/label-has-associated-control */
import { RefObject } from 'react';
import cln from 'classnames';
import styles from './form.module.scss';

interface IInputProps {
  name: string;
  label: string;
  err?: boolean;
  errMsg?: string;
  value1: string;
  value2: string;
  value3: string;
  radio1Ref: RefObject<HTMLInputElement>;
  radio2Ref: RefObject<HTMLInputElement>;
  radio3Ref: RefObject<HTMLInputElement>;
}

export default function InputRadio(props: IInputProps) {
  const { name, label, radio1Ref, radio2Ref, radio3Ref, value1, value2, value3, errMsg, err } =
    props;

  return (
    <div
      className={`${styles.inputBlock} ${err ? cln(styles.inputBlock, styles.inputBlockErr) : ''}`}
    >
      <label
        htmlFor="input"
        className={`${styles.label} ${err ? styles.invalid : ''}`}
      >
        {label}
        <div className={styles.radio}>
          <div>
            <input
              type="radio"
              name={name}
              value={value1}
              ref={radio1Ref}
            />
            {value1}
          </div>
          <div>
            <input
              type="radio"
              name={name}
              value={value2}
              ref={radio2Ref}
            />
            {value2}
          </div>
          <div>
            <input
              type="radio"
              name={name}
              value={value3}
              ref={radio3Ref}
            />
            {value3}
          </div>
        </div>
        <div className={styles.error}>{err && <p className={styles.error__msg}>{errMsg}</p>}</div>
      </label>
    </div>
  );
}

InputRadio.defaultProps = {
  err: undefined,
  errMsg: undefined,
};
