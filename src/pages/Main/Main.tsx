import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../UI/Card/Card';
import styles from './main.module.scss';
import MainContent from '../../UI/MainContent/MainContent';

export default function Main() {
  return (
    <MainContent>
      <p>Main page</p>
      <Card className={styles.searchBar}>
        <SearchBar />
      </Card>
    </MainContent>
  );
}
