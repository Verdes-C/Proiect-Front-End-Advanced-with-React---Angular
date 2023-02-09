import axios from 'axios';
import { useEffect, useState } from 'react';

function Carousel() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [imageToDisplay, setImageToDisplay] = useState({
    _id: '63cda84edfe6ba63d3581b6b',
    name: 'carousel5',
    scope: 'carousel',
    src: 'https://firebasestorage.googleapis.com/v0/b/proiect-react-283c4.appspot.com/o/Header%2Fcarousel%2Fcarousel5.jpg?alt=media&token=05b17ce7-2d98-4907-90f5-bf9464a6023b',
    __v: 0,
  });
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const getItems = async () => {
      const items = await axios
        .get('http://localhost:3001/image/carousel', {
          params: {
            scope: 'carousel',
          },
        })
        .then((result) => result.data);
      setCarouselItems(items);
    };
    getItems();
  }, []);

  useEffect(() => {
    const maxIndex = carouselItems.length;
    const interval = setInterval(() => {
      setIndex((index + 1) % maxIndex);
      setImageToDisplay(carouselItems[index]);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [carouselItems, index]);

  return (
    <div className={imageToDisplay.src && 'banner-carousel'}>
      {imageToDisplay.src && (
        <img
          src={imageToDisplay.src}
          alt={imageToDisplay.name}
          key={imageToDisplay._id}
        />
      )}
    </div>
  );
}

export default Carousel;
