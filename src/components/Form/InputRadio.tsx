/* eslint-disable jsx-a11y/label-has-associated-control */
import cln from 'classnames';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './form.module.scss';

interface IInputProps {
  name: string;
  label: string;
  value1: string;
  value2: string;
  value3: string;
  register?: UseFormRegisterReturn;
  errors?: FieldError | undefined;
}

function InputRadio(props: IInputProps) {
  const { errors, register, name, label, value1, value2, value3 } = props;

  return (
    <div
      className={`${styles.inputBlock} ${
        errors ? cln(styles.inputBlock, styles.inputBlockErr) : ''
      }`}
    >
      <label
        htmlFor="input"
        className={`${styles.label} ${errors ? styles.invalid : ''}`}
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
        <div className={styles.error}>
          {errors && <p className={styles.error__msg}>{errors.message}</p>}
        </div>
      </label>
    </div>
  );
}

InputRadio.defaultProps = {
  register: undefined,
  errors: undefined,
};

export default InputRadio;
