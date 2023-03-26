/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component, RefObject } from 'react';
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

interface IFormState {
  nameErr: boolean;
  surnameErr: boolean;
  dateValueErr: boolean;
  selectValueErr: boolean;
  switchValueErr: boolean;
  filePhotoErr: boolean;
}

class Form extends Component<IFormProps, IFormState> {
  private inputName: RefObject<HTMLInputElement> = React.createRef();

  private inputSurname: RefObject<HTMLInputElement> = React.createRef();

  private dateRef: RefObject<HTMLInputElement> = React.createRef();

  private selectRef: RefObject<HTMLSelectElement> = React.createRef();

  private checkboxRef: RefObject<HTMLInputElement> = React.createRef();

  private switchRef1: RefObject<HTMLInputElement> = React.createRef();

  private switchRef2: RefObject<HTMLInputElement> = React.createRef();

  private switchRef3: RefObject<HTMLInputElement> = React.createRef();

  private fileRef: RefObject<HTMLInputElement> = React.createRef();

  constructor(props: IFormProps) {
    super(props);
    this.state = {
      nameErr: false,
      surnameErr: false,
      dateValueErr: false,
      selectValueErr: false,
      switchValueErr: false,
      filePhotoErr: false,
    };
  }

  validationForm = () => {
    const {
      inputName,
      inputSurname,
      dateRef,
      selectRef,
      switchRef1,
      switchRef2,
      switchRef3,
      fileRef,
    } = this;
    let isNotValid = false;

    if (!isFirstLetterCapital(inputName.current?.value || '')) {
      this.setState({ nameErr: true });
      isNotValid = true;
    } else this.setState({ nameErr: false });

    if (!isFirstLetterCapital(inputSurname.current?.value || '')) {
      this.setState({ surnameErr: true });
      isNotValid = true;
    } else this.setState({ surnameErr: false });

    if (!isDateValid(dateRef.current?.value || '')) {
      this.setState({ dateValueErr: true });
      isNotValid = true;
    } else this.setState({ dateValueErr: false });

    if (
      !switchRef1.current?.checked &&
      !switchRef2.current?.checked &&
      !switchRef3.current?.checked
    ) {
      this.setState({ switchValueErr: true });
      isNotValid = true;
    } else this.setState({ switchValueErr: false });

    if (selectRef.current?.value === 'Choose') {
      this.setState({ selectValueErr: true });
      isNotValid = true;
    } else this.setState({ selectValueErr: false });

    if (fileRef.current?.files?.length === 0) {
      this.setState({ filePhotoErr: true });
      isNotValid = true;
    } else this.setState({ filePhotoErr: false });

    return isNotValid;
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.validationForm()) {
      return;
    }

    const { onAddNewCard } = this.props;
    const {
      inputName,
      inputSurname,
      dateRef,
      selectRef,
      checkboxRef,
      switchRef1,
      switchRef2,
      switchRef3,
      fileRef,
    } = this;

    const name = inputName.current?.value || '';
    const surname = inputSurname.current?.value || '';
    const dateValue = dateRef.current?.value || '';
    const selectValue = selectRef.current?.value || '';
    const checkboxValue = checkboxRef.current?.checked || false;

    const switchValue =
      (switchRef1.current?.checked ? switchRef1.current?.value : '') ||
      (switchRef2.current?.checked ? switchRef2.current?.value : '') ||
      (switchRef3.current?.checked ? switchRef3.current?.value : '');

    let filePhoto;
    const file = fileRef.current?.files && fileRef.current?.files[0];
    if (file) {
      const reader = new FileReader();
      const result = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      filePhoto = result as string;
    }

    const data = {
      name,
      surname,
      dateValue,
      selectValue,
      checkboxValue,
      switchValue,
      filePhoto,
    };

    onAddNewCard(data);

    if (this.inputName.current) this.inputName.current.value = '';
    if (this.inputSurname.current) this.inputSurname.current.value = '';
    if (this.dateRef.current) this.dateRef.current.value = '';
    if (this.selectRef.current) this.selectRef.current.options[0].selected = true;
    if (this.checkboxRef.current) this.checkboxRef.current.checked = false;
    if (this.switchRef1.current?.checked) this.switchRef1.current.checked = false;
    if (this.switchRef2.current?.checked) this.switchRef2.current.checked = false;
    if (this.switchRef3.current?.checked) this.switchRef3.current.checked = false;
    if (this.fileRef.current?.value) this.fileRef.current.value = '';
  };

  render() {
    const { nameErr, surnameErr, dateValueErr, selectValueErr, switchValueErr, filePhotoErr } =
      this.state;

    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        <div className={styles.title}>Add new card</div>
        <div className={styles.block}>
          <Input
            label="Name"
            err={nameErr}
            errMsg="The first letter must be uppercase"
            inputRef={this.inputName}
          />
          <Input
            label="Surname"
            err={surnameErr}
            errMsg="The first letter must be uppercase"
            inputRef={this.inputSurname}
          />
        </div>

        <div className={styles.block}>
          <Input
            label="Birthday"
            type="date"
            err={dateValueErr}
            errMsg="Choose correct date"
            inputRef={this.dateRef}
          />
          <Input
            type="checkbox"
            inputRef={this.checkboxRef}
            label="Need a job?"
          />
        </div>

        <div className={styles.block}>
          <InputSelect
            selectRef={this.selectRef}
            err={selectValueErr}
            errMsg="Choose framework"
          />

          <InputRadio
            label="Specify your level"
            name="switcher"
            value1="Junior"
            value2="Middle"
            value3="Senior"
            radio1Ref={this.switchRef1}
            radio2Ref={this.switchRef2}
            radio3Ref={this.switchRef3}
            err={switchValueErr}
            errMsg="Specify your level"
          />
        </div>

        <div className={styles.block}>
          <Input
            inputRef={this.fileRef}
            label="Your Photo"
            type="file"
            accept="image/*"
            errMsg="Choose your photo"
            err={filePhotoErr}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default Form;
