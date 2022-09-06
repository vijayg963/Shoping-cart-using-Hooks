import React, { useState } from 'react';
import Addcart from './Addcart';

function Card(props) {
  const [addData, setaddData] = useState([]);

  const productExist = (item) => {
    const len = addData.length;
    const items = addData;
    for (let i = 0; i < len; i++) {
      if (item.id === items[i].id) {
        return true;
      }
    }
    return false;
  };

  const handleOrder = (item) => {
    if (productExist(item)) {
      const index = addData.findIndex((data) => data.id === item.id);
      addData[index].quantity += 1;
      setaddData([...addData]);
    } else {
      const clonedItem = { ...item };
      clonedItem.quantity = 1;
      setaddData([...addData, clonedItem]);
    }
  };

  const handleIncrement = (id) => {
    const index = addData.findIndex((data) => data.id === id);
    addData[index].quantity += 1;
    setaddData([...addData]);
  };

  const handleDecrement = (id) => {
    const index = addData.findIndex((data) => data.id === id);
    if (addData[index].quantity > 1) {
      addData[index].quantity -= 1;
    }
    setaddData([...addData]);
  };

  //working
  const handleDelete = (id) => {
    let cloneData = [...addData];
    setaddData(cloneData.filter((p) => id !== p.id));
    return cloneData;
  };

  // Working
  const handledata = (sorted, data) => {
    let result = [...data];
    if (sorted === 'lowest') {
      result = data.sort((a, b) => a.price - b.price);
    }
    if (sorted === 'highest') {
      result = data.sort((a, b) => b.price - a.price);
    }
    return result;
  };

  let sorted = props.sortByPrice;
  let data = props.filterSize.length > 0 ? props.filterSize : props.data;
  const shoppingBeg = addData;
  const newData = handledata(sorted, data);

  return (
    <>
      <Addcart
        shoppingBeg={shoppingBeg}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
      />
      <div className='card-parent'>
        {newData.map((item, i) => (
          <>
            <div key={item.id} className='card'>
              <div className='item-img'>
                <span className='free-shiping'>
                  {item.isFreeShipping ? 'Free Shiping' : ''}
                </span>
                <img
                  src={`/static/products/${item.sku}_1.jpg`}
                  alt={item.sku}
                />
              </div>
              <h2>{item.title}</h2>
              <div className='flex'>
                <div>
                  Size:-
                  {item.availableSizes.map((e) => (
                    <span key={e}>{e},</span>
                  ))}
                </div>
                <p className='price-tag'>
                  {item.currencyFormat} <strong>{item.price}</strong>
                </p>
              </div>
              <button onClick={() => handleOrder(item)} className='Add-cart'>
                Add to cart
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Card;
