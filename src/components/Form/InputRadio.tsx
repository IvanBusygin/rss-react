/* eslint-disable jsx-a11y/label-has-associated-control */
import cln from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './form.module.scss';

interface IInputProps {
  name: string;
  label: string;
  err?: boolean;
  errMsg?: string;
  value1: string;
  value2: string;
  value3: string;
  register?: UseFormRegisterReturn;
}

function InputRadio(props: IInputProps) {
  const { register, name, label, value1, value2, value3, errMsg, err } = props;

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
              {...register}
            />
            {value1}
          </div>
          <div>
            <input
              type="radio"
              name={name}
              value={value2}
              {...register}
            />
            {value2}
          </div>
          <div>
            <input
              type="radio"
              name={name}
              value={value3}
              {...register}
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
  register: undefined,
};

export default InputRadio;
