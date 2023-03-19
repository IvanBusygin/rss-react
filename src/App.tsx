import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Main from './pages/Main/Main';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="Main" />}
          />
          <Route
            path="Main"
            element={<Main />}
          />
          <Route
            path="About"
            element={<AboutUs />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
