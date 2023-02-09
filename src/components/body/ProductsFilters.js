import { useState } from 'react';
import Button from '../Button';
import axios from 'axios';

function ProductsFilters({ products, setProducts }) {
  const [brandSelect, setBrandSelect] = useState('');
  const [colorSelect, setColorSelect] = useState('');

  const brands = [
    'Bentley',
    "Caran d'Ache",
    'Conklin',
    'Cross',
    'Diplomat',
    'Esterbrook',
    'Faber-Castell',
  ];
  const colors = ['black', 'green', 'blue', 'grey', 'white', 'gold'];

  const handleBrandSelect = (event) => {
    setBrandSelect(event.target.value);
  };

  const handleCOlorSelect = (event) => {
    setColorSelect(event.target.value);
  };

  const submitFilter = async () => {
    const params = new URLSearchParams();
    if (brandSelect) params.append('brand', brandSelect);
    if (colorSelect) params.append('color', colorSelect);
    const productsResult = await axios
      .post('http://localhost:3001/get/products', params)
      .then((result) => {
        setProducts(result.data);
      });
  };

  const renderFilter = () => {
    return (
      <div>
        <p>Brands:</p>
        <ul>
          {brands.map((brand, index) => {
            return (
              <li key={index}>
                <input
                  onClick={(event) => {
                    handleBrandSelect(event);
                  }}
                  name={'brand'}
                  type={'radio'}
                  value={brand}
                ></input>
                <label htmlFor={brand}>{brand}</label>
              </li>
            );
          })}
        </ul>
        <p>Colors:</p>
        <ul>
          {colors.map((color, index) => {
            return (
              <li key={index}>
                <input
                  onClick={(event) => {
                    handleCOlorSelect(event);
                  }}
                  name={'color'}
                  type={'radio'}
                  value={color}
                ></input>
                <label htmlFor={color}>{color}</label>
              </li>
            );
          })}
        </ul>
        <Button
          classes={'btn primary btn-center btn-full-width'}
          onClick={() => {
            submitFilter();
          }}
        >
          Submit
        </Button>
      </div>
    );
  };

  return (
    <div className="productsFiltersContainer">
      <h3>Filters:</h3>
      {renderFilter()}
    </div>
  );
}

export default ProductsFilters;
