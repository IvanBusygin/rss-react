import { Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from './components/layouts/Layout';
import Main from './pages/Main/Main';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Main />}
        />
        <Route
          path="about"
          element={<AboutUs />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
