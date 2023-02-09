import ProductsFilters from './ProductsFilters';
import ProductsToDisplay from './ProductsToDisplay';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:3001/get/products', {}).then((result) => {
      setProducts(result.data);
    });
  }, []);

  return (
    <div className="productsPageContainer">
      <ProductsFilters products={products} setProducts={setProducts} />
      <ProductsToDisplay products={products} setProducts={setProducts} />
    </div>
  );
}

export default Products;
