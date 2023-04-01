import { useForm } from 'react-hook-form';
import styles from './form.module.scss';
import { IUser } from '../../types/ITypes';
import Button from '../../UI/Button/Button';
import Input from './Input';
import { isFirstLetterCapital, isDateValid } from '../../utils/utils';
import InputRadio from './InputRadio';
import InputSelect from './InputSelect';

interface IFormProps {
  onAddNewCard: (data: IUser) => void;
}

enum ErrorMsg {
  nameReq = 'Enter The Name',
  surnameReq = 'Enter Your Last Name',
  validNameMsg = 'Start with a capital',
  birthdayReg = 'Enter your date of birth',
  birthdayValid = 'Choose correct date',
  selectReq = 'Choose framework',
  switchReq = 'Specify your level',
  filePhotoReq = 'Please upload your photo',
}

function Form(props: IFormProps) {
  const { onAddNewCard } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit = async (data: IUser) => {
    onAddNewCard(data);
  };

  return (
    <form
      noValidate
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.title}>Add new card</div>
      <div className={styles.block}>
        <Input
          label="Name"
          err={Boolean(errors.name)}
          errMsg={errors.name && errors.name.message}
          register={register('name', {
            required: ErrorMsg.nameReq,
            validate: {
              firstLetter: (val) => isFirstLetterCapital(val) || ErrorMsg.validNameMsg,
            },
          })}
        />

        <Input
          label="Surname"
          err={Boolean(errors.surname)}
          errMsg={errors.surname && errors.surname.message}
          register={register('surname', {
            required: ErrorMsg.surnameReq,
            validate: {
              firstLetter: (val) => isFirstLetterCapital(val) || ErrorMsg.validNameMsg,
            },
          })}
        />
      </div>

      <div className={styles.block}>
        <Input
          label="birthday"
          type="date"
          err={Boolean(errors.birthday)}
          errMsg={errors.birthday && errors.birthday.message}
          register={register('birthday', {
            required: ErrorMsg.birthdayReg,
            validate: {
              firstLetter: (val) => isDateValid(val) || ErrorMsg.birthdayValid,
            },
          })}
        />

        <Input
          type="checkbox"
          label="Need a job?"
        />
      </div>

      <div className={styles.block}>
        <InputSelect
          err={Boolean(errors.selectValue)}
          errMsg={errors.selectValue && errors.selectValue.message}
          register={register('selectValue', {
            validate: {
              level: (val) => val !== 'Choose' || ErrorMsg.selectReq,
            },
          })}
        />

        <InputRadio
          label="Specify your level"
          name="switcher"
          err={Boolean(errors.switchValue)}
          errMsg={errors.switchValue && errors.switchValue.message}
          register={register('switchValue', {
            required: ErrorMsg.switchReq,
          })}
          value1="Junior"
          value2="Middle"
          value3="Senior"
        />
      </div>

      <div className={styles.block}>
        <Input
          label="Your Photo"
          type="file"
          accept="image/*"
          err={Boolean(errors.filePhoto)}
          errMsg={errors.filePhoto && errors.filePhoto.message}
          register={register('filePhoto', {
            required: ErrorMsg.filePhotoReq,
          })}
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Form;
