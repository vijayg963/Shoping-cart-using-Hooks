import React, { useState } from 'react';

function Addcart(props) {
  const [display, setdisplay] = useState(false);
  let activeItem = props.shoppingBeg;

  const subtotal =
    activeItem.length > 0
      ? activeItem
          .reduce((acc, cv) => acc + cv.quantity * cv.price, 0)
          .toFixed(2)
      : null;

  const alertTotal = () => {
    return alert(`Total amount is ${subtotal}`);
  };

  return (
    <div className='addCart'>
      <div onClick={() => setdisplay(true)} className='beg-logo'>
        <img src={`/static/bag-icon.png`} alt='beg' />
        <span className='circle count'>{activeItem.length}</span>
      </div>
      <div className={display ? 'addCart-box' : 'hidden'}>
        <span onClick={() => setdisplay(false)} className='close-button'>
          ❌
        </span>
        <section className='header'>
          <img src={`/static/bag-icon.png`} alt='beg' />
          <span className='circle count2'>{activeItem.length}</span>
          <span className='cart-name'>Cart</span>
        </section>
        <div className='cart-view'>
          {activeItem.map((item) => (
            <>
              <div key={item.id} className='beg-item-view flex-end'>
                <div className='flex'>
                  <span>
                    <img src={`/static/products/${item.sku}_1.jpg`} alt='' />
                  </span>
                  <div className='details'>
                    <span>{item.title}</span>
                    <p className='style-color'>{item.style}</p>
                    <span>Quantity: {item.quantity}</span>
                  </div>
                </div>
                <span className='price-quantity'>
                  <p
                    className='deletItem'
                    onClick={() => props.handleDelete(item.id)}
                  >
                    ❌
                  </p>
                  <p className='mrp'>
                    $ {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <span>
                    <span
                      onClick={() => props.handleDecrement(item.id)}
                      className='btn'
                    >
                      -
                    </span>
                    <span
                      onClick={() => props.handleIncrement(item.id)}
                      className='btn'
                    >
                      +
                    </span>
                  </span>
                </span>
              </div>
            </>
          ))}
        </div>
        <div className='subtotal'>
          <div className='flex-end'>
            <span>SUBTOTAL : </span>
            <span>
              <p>{subtotal}</p>
            </span>
          </div>
          <button onClick={alertTotal} className='total-bill'>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addcart;
