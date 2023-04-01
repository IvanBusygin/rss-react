import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';

import MainPage from './pages/Main/MainPage';
import AboutUsPage from './pages/AboutUs/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import FormPage from './pages/Form/FormPage';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="Main" />}
          />
          <Route
            path="Main"
            element={<MainPage />}
          />
          <Route
            path="About"
            element={<AboutUsPage />}
          />
          <Route
            path="Form"
            element={<FormPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
