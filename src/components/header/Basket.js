import Button from '../Button';
import { useNavigate } from 'react-router-dom';

function Basket() {
  const navigate = useNavigate();

  const handleNavigateToBasketList = () => {
    navigate('/basket');
  };
  return (
    <Button
      classes={'header-user btn outline rounded'}
      onClick={() => {
        handleNavigateToBasketList();
      }}
    >
      <i className="fa-solid fa-bag-shopping fa-xl header-icons"></i>
      <p className="header-button-description">Basket</p>
    </Button>
  );
}

export default Basket;
