/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import cls from 'classnames';
import styles from './ArticleModal.module.scss';

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
}

function ArticlesModal(props: IModalProps) {
  const { isOpen, children, onClose } = props;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) setIsVisible(true);
  }, [isOpen]);

  const closeHandler = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose(false);
    }, 300);
  };

  return isOpen
    ? createPortal(
        <div
          className={isVisible ? cls(styles.modal, styles.modal__visible) : styles.modal}
          onClick={closeHandler}
        >
          <div
            className={isVisible ? cls(styles.content, styles.content__visible) : styles.content}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>,
        document.body,
      )
    : null;
}

export default ArticlesModal;
