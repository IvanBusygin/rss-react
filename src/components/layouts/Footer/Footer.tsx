import styles from './footer.module.scss';
import gitHubIcon from '../../../assets/img/github-mark.svg';
import rsSchoolIcon from '../../../assets/img/rs_school-icon.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
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
    </footer>
  );
}

export default Footer;
