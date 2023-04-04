import { FieldValues, useForm } from 'react-hook-form';
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
    reset,
  } = useForm<IUser>();

  const onSubmit = (data: FieldValues) => {
    const file = data.filePhoto[0];
    const reader = new FileReader();
    reader.onload = () => {
      const filePhoto = reader.result as string;
      const newData: FieldValues = { ...data, filePhoto };
      onAddNewCard(newData as IUser);
    };
    reader.readAsDataURL(file);

    reset();
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
          errors={errors.name}
          register={register('name', {
            required: ErrorMsg.nameReq,
            validate: {
              firstLetter: (val) => isFirstLetterCapital(val) || ErrorMsg.validNameMsg,
            },
          })}
        />

        <Input
          label="Surname"
          errors={errors.surname}
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
          label="Birthday"
          type="date"
          errors={errors.birthday}
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
          errors={errors.selectValue}
          register={register('selectValue', {
            validate: {
              level: (val) => val !== 'Choose' || ErrorMsg.selectReq,
            },
          })}
        />

        <InputRadio
          label="Specify your level"
          name="switcher"
          errors={errors.switchValue}
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
          errors={errors.filePhoto}
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
