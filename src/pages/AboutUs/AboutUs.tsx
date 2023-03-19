import { Component } from 'react';
import MainContent from '../../UI/MainContent/MainContent';

import styles from './aboutUs.module.scss';
import Card from '../../UI/Card/Card';

export default class AboutUs extends Component {
  render() {
    return (
      <MainContent>
        <Card className={styles.about}>
          <h2>Ivan Busygin</h2>
          <p>Frontend Developer</p>
          <a href="https://app.rs.school/certificate/5lgejwvm">Certificate</a>
        </Card>
      </MainContent>
    );
  }
}
