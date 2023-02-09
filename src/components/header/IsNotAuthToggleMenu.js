import Button from '../Button';
import { useNavigate } from 'react-router-dom';

function IsNotAuthToggleMenu() {
  const navigate = useNavigate();

  const loginRedirect = () => {
    navigate('/login');
  };

  const registerRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="header-toggle">
      <Button onClick={loginRedirect} classes={'btn primary rounded'}>
        <i className="fa-solid fa-right-to-bracket"></i>Log in
      </Button>
      <Button onClick={registerRedirect} classes={'btn secondary rounded'}>
        <i className="fa-solid fa-user-plus"></i>Register
      </Button>
    </div>
  );
}

export default IsNotAuthToggleMenu;
