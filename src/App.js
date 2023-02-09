import './style.css';
import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(window.sessionStorage.getItem('isAuth'))
  );

  useEffect(() => {
    if (window.sessionStorage.getItem('basket') == null) {
      window.sessionStorage.setItem('basket', JSON.stringify([]));
    }
  }, []);

  return (
    <div>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} className="header" />
      <div className="bodyContainer">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
