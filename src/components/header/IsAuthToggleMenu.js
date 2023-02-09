import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store';

function IsAuthToggleMenu({ isAuth, setIsAuth }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toLogout = () => {
    dispatch(logout());
    setIsAuth({ status: false });
    navigate('/');
  };

  const menuOptions = ['User Data', 'Logout'];
  const menuLinks = ['/user', '/'];

  const renderList = menuOptions.map((option, index) => {
    if (option === 'Logout') {
      return (
        <li key={index} onClick={toLogout}>
          <Link to={menuLinks[index]}>{option}</Link>
        </li>
      );
    } else
      return (
        <li key={index}>
          <Link to={menuLinks[index]}>{option}</Link>
        </li>
      );
  });

  return (
    <div className="header-toggle">
      <ul>{renderList}</ul>
    </div>
  );
}

export default IsAuthToggleMenu;
