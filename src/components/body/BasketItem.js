import { useState } from 'react';
import Button from '../Button';

function BasketItem({ Listitem, basketIndex, basket, setNewBasket }) {
  const [deleteValue, setDeleteValue] = useState(0);
  const [item, setItem] = useState(Listitem);

  const handleDeleteValueChange = (event) => {
    setDeleteValue(event.target.value);
  };

  const handleDeleteSubmit = () => {
    if (deleteValue === 0) {
      return;
    } else if (deleteValue < Number(item.quantity)) {
      setItem({ ...item, quantity: Number(item.quantity) - deleteValue });
      delete basket[basketIndex];
      basket[basketIndex] = item;
      setNewBasket(basket);
      window.sessionStorage.setItem('basket', JSON.stringify(basket));
    } else if (deleteValue >= Number(item.quantity)) {
      basket.splice(basketIndex, 1);
      console.log(basket);
      setNewBasket(basket);
      window.sessionStorage.setItem('basket', JSON.stringify(basket));
      setItem({ message: 'deleted' });
    }
  };

  if (item?.message === 'deleted') {
    return;
  } else {
    return (
      <div className="basketItem">
        <span className="basketItemName">{item.name}</span>
        <span>|</span>
        <span>{item.quantity}</span>
        <span className="basketItemDelete">
          <input
            min={'0'}
            max={'99'}
            type={'number'}
            value={deleteValue || ''}
            placeholder={'0'}
            onChange={(event) => handleDeleteValueChange(event)}
          ></input>
          <Button
            classes={'btn btn-center primary'}
            onClick={() => handleDeleteSubmit()}
          >
            Delete
          </Button>
        </span>
      </div>
    );
  }
}
export default BasketItem;
