import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Logo() {
  const logo = useSelector((state) => {
    return state.logo;
  });
  return (
    <Link to={'/'}>
      <img className="logo-image" src={logo.src} alt={logo.name} />
    </Link>
  );
}

export default Logo;
