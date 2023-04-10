import React from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

interface IModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

function Modal(props: IModalProps) {
  const { isOpen, children } = props;

  return isOpen
    ? createPortal(
        <div className={styles.modal__cover}>
          <div className={styles.modal__info}>{children}</div>
        </div>,
        document.body,
      )
    : null;
}

export default Modal;
