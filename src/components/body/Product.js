import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from '../Button';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [productInformationDisplay, setProductInformationDisplay] =
    useState('');
  const [buyQuantity, setBuyQuantity] = useState(1);

  useEffect(() => {
    const filter = new URLSearchParams();
    filter.append('_id', id);
    axios.post('http://localhost:3001/get/products', filter).then((result) => {
      setProduct(result.data[0]);
      setProductInformationDisplay(result.data[0].description);
    });
  }, []);

  const handleInformationToDisplayChange = (type) => {
    switch (type) {
      case 'Essential Information':
        setProductInformationDisplay(product.essentialInformations);
        break;
      case 'Description':
        setProductInformationDisplay(product.description);
        break;
      default:
        break;
    }
  };

  const handleBuyQuantityChange = (event) => {
    setBuyQuantity(event.target.value);
  };

  const handleAddToBasket = (event) => {
    const basket = JSON.parse(window.sessionStorage.getItem('basket'));
    const productToAdd = { name: product.name, quantity: buyQuantity };
    basket.push(productToAdd);
    window.sessionStorage.setItem('basket', JSON.stringify(basket));
  };

  return (
    <div className="productPageContainer">
      <div className="productContainer">
        <div className="presentation">
          <img src={product.image} alt={product.name}></img>
          <div className="presentation-details">
            <p>
              <span className="productBrand"> {product.brand}</span>{' '}
              {product.name}
            </p>
            <p>Color: {product.color}</p>
            <p className="productPrice">
              Price:
              <span className="productOriginalPrice">
                {' '}
                {product.price + '€'}{' '}
              </span>
              {(product.price - product.price * product.discount).toFixed(2) +
                ' Lei' +
                ''}
            </p>
            <div className="productPurchase">
              <input
                type={'number'}
                value={buyQuantity}
                onChange={(event) => handleBuyQuantityChange(event)}
              ></input>
              <Button
                classes={'btn primary btn-center'}
                onClick={(event) => {
                  handleAddToBasket(event);
                }}
              >
                Add to Basket
              </Button>
            </div>
            <div className="productInfoToDisplay">
              <Button
                classes={'btn btn-center primary rounded'}
                onClick={(event) => {
                  handleInformationToDisplayChange(event.target.textContent);
                }}
              >
                Description
              </Button>
              <Button
                classes={'btn btn-center  primary rounded'}
                onClick={(event) => {
                  handleInformationToDisplayChange(event.target.textContent);
                }}
              >
                Essential Information
              </Button>
            </div>
          </div>
        </div>
        <p className="productDisplayedInformation">
          {productInformationDisplay}
        </p>
      </div>
    </div>
  );
}

export default Product;
