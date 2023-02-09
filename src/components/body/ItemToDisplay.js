import { useNavigate } from 'react-router-dom';

function ItemToDisplay({ product, children }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate(`/products/${product._id}`);
  };

  return (
    <div
      className="itemToDisplay"
      onClick={(event) => {
        handleClick(event);
      }}
    >
      {children}
    </div>
  );
}
export default ItemToDisplay;
