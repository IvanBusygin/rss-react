/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component, RefObject } from 'react';
import styles from './form.module.scss';
import { IUser } from '../../types/ITypes';
import Button from '../../UI/Button/Button';
import isFirstLetterCapital from '../../utils/utils';

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

    if (dateRef.current?.value === '') {
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
        <div>Add new card</div>
        <div className={styles.block}>
          <div>
            <label className={styles.label}>
              Name
              <input
                defaultValue="Ff"
                type="text"
                ref={this.inputName}
              />
            </label>
            <div className={styles.error}>
              {nameErr && <p className={styles.error__msg}>The first letter must be uppercase</p>}
            </div>
          </div>

          <div>
            <label className={styles.label}>
              Surname
              <input
                defaultValue="FfFf"
                type="text"
                ref={this.inputSurname}
              />
            </label>
            <div className={styles.error}>
              {surnameErr && (
                <p className={styles.error__msg}>The first letter must be uppercase</p>
              )}
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <div>
            <label className={styles.label}>
              Birthday
              <input
                type="date"
                ref={this.dateRef}
              />
            </label>
            <div className={styles.error}>
              {dateValueErr && <p className={styles.error__msg}>Choose Date</p>}
            </div>
          </div>

          <label className={styles.label}>
            Need a job?
            <input
              type="checkbox"
              ref={this.checkboxRef}
            />
          </label>
        </div>

        <label>
          Your preferred framework
          <select
            className={styles.select}
            ref={this.selectRef}
            defaultValue="Choose"
          >
            <option value="Choose">Choose framework</option>
            <option value="Vue">Vue js</option>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
        </label>
        <div className={styles.error}>
          {selectValueErr && <p className={styles.error__msg}>Choose framework</p>}
        </div>

        <label className={styles.label}>
          Specify your level
          <div className={styles.radio}>
            <div>
              <input
                type="radio"
                name="switcher"
                value="Junior"
                ref={this.switchRef1}
              />
              Junior
            </div>
            <div>
              <input
                type="radio"
                name="switcher"
                value="Middle"
                ref={this.switchRef2}
              />
              Middle
            </div>
            <div>
              <input
                type="radio"
                name="switcher"
                value="Senior"
                ref={this.switchRef3}
              />
              Senior
            </div>
          </div>
        </label>
        <div className={styles.error}>
          {switchValueErr && <p className={styles.error__msg}>Specify your level</p>}
        </div>

        <label className={styles.label}>
          Your Photo
          <input
            type="file"
            accept="image/*"
            ref={this.fileRef}
          />
          <div className={styles.error}>
            {filePhotoErr && <p className={styles.error__msg}>Choose your photo</p>}
          </div>
        </label>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default Form;
