import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import IsAuthToggleMenu from './IsAuthToggleMenu';
import IsNotAuthToggleMenu from './IsNotAuthToggleMenu';
import Button from '../Button';

function Account({ isAuth, setIsAuth }) {
  const [show, setShow] = useState(false);
  // const [isAuth, setIsAuth] = useState(
  //   JSON.parse(window.sessionStorage.getItem('isAuth'))
  // );

  const toggleAccountMenu = () => {
    setShow(!show);
  };

  const renderMenuOptions = (menuptions) => {
    if (show === false || show === undefined) {
      return;
    } else {
      if (isAuth?.status) {
        return <IsAuthToggleMenu isAuth={isAuth} setIsAuth={setIsAuth} />;
      } else {
        return <IsNotAuthToggleMenu />;
      }
    }
  };

  return (
    <div className="account-flex" onClick={toggleAccountMenu}>
      <Button classes={'header-user btn outline rounded'}>
        <i className="fa-solid fa-user fa-xl header-icons"></i>
        <p className="header-button-description">Account</p>
      </Button>
      {renderMenuOptions()}
    </div>
  );
}

export default Account;
