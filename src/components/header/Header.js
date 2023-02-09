import Logo from './Logo';
import Account from './Account';
import Basket from './Basket';
import Carousel from './Carousel';

function Header({ className, isAuth, setIsAuth }) {
  return (
    <div className={className}>
      <Logo />
      <Carousel />
      <Account isAuth={isAuth} setIsAuth={setIsAuth} />
      <Basket isAuth={isAuth} setIsAuth={setIsAuth} />
    </div>
  );
}

export default Header;
