import { useEffect, useState } from 'react';
import BasketItem from './BasketItem';

function Basket() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    if (basketItems != JSON.parse(window.sessionStorage.getItem('basket'))) {
      const items = JSON.parse(window.sessionStorage.getItem('basket'));
      setBasketItems(items);
    }
  }, []);

  console.log(basketItems);
  return (
    <div className="basketPageContainer">
      <div className="basketContainer">
        {basketItems.map((item, index) => {
          return (
            <BasketItem
              Listitem={item}
              key={index}
              basketIndex={index}
              basket={basketItems}
              setNewBasket={(value) => {
                setBasketItems(value);
              }}
            />
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default Basket;
