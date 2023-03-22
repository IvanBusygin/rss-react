import { Component } from 'react';
import styles from './footer.module.scss';
import gitHubIcon from '../../../assets/svg/github-mark.svg';
import rsSchoolIcon from '../../../assets/svg/rs_school-icon.svg';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__githubWrapper}>
            <a
              className={styles.footer__github}
              href="https://github.com/IvanBusygin"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.footer__logo}
                src={gitHubIcon}
                alt="GitHub"
              />
            </a>
          </div>
          <time
            className={styles.footer__year}
            dateTime="2023"
          >
            2023
          </time>
          <a
            href="https://rs.school/react/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.footer__logo}
              src={rsSchoolIcon}
              alt="RSSchool icon"
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
