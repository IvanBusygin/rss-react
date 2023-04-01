/* eslint-disable jsx-a11y/label-has-associated-control */
import cln from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './form.module.scss';

interface IInputProps {
  err?: boolean;
  errMsg?: string;
  register?: UseFormRegisterReturn;
}

function InputSelect(props: IInputProps) {
  const { errMsg, err, register } = props;

  return (
    <div
      className={`${styles.inputBlock} ${err ? cln(styles.inputBlock, styles.inputBlockErr) : ''}`}
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
        <div className={styles.error}>{err && <p className={styles.error__msg}>{errMsg}</p>}</div>
      </label>
    </div>
  );
}

InputSelect.defaultProps = {
  err: undefined,
  errMsg: undefined,
  register: undefined,
};

export default InputSelect;
