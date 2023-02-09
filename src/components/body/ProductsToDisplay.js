import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ItemToDisplay from './ItemToDisplay';

function ProductsToDisplay({ products, setProducts }) {
  const navigate = useNavigate();
  const [listLimit, setListLimit] = useState(12);

  return (
    <div className="productsToDisplay">
      {products.map((product) => {
        return (
          <ItemToDisplay key={product._id} product={product}>
            <img src={product.image} alt={product.name}></img>
            <div className="productDetails">
              <p className="productName">{product.name}</p>
              <p className="productBrand">{product.brand}</p>
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
              <p className="productDescription">
                {product.description.substring(0, 200) + '...'}
              </p>
            </div>
          </ItemToDisplay>
        );
      })}
    </div>
  );
}
export default ProductsToDisplay;
