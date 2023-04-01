/* eslint-disable jsx-a11y/label-has-associated-control */
import cln from 'classnames';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './form.module.scss';

interface IInputProps {
  register?: UseFormRegisterReturn;
  errors?: FieldError | undefined;
}

function InputSelect(props: IInputProps) {
  const { errors, register } = props;

  return (
    <div
      className={`${styles.inputBlock} ${
        errors ? cln(styles.inputBlock, styles.inputBlockErr) : ''
      }`}
    >
      <label>
        Your preferred framework
        <select
          className={styles.select}
          {...register}
          defaultValue="Choose"
        >
          <option value="Choose">Choose framework</option>
          <option value="Vue">Vue js</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
        </select>
        <div className={styles.error}>
          {errors && <p className={styles.error__msg}>{errors.message}</p>}
        </div>
      </label>
    </div>
  );
}

InputSelect.defaultProps = {
  register: undefined,
  errors: undefined,
};

export default InputSelect;
