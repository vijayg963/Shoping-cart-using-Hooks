import React, { useState } from 'react';
import Card from './Card';

function Main(props) {
  const [sortByPrice, setsortByPrice] = useState('');

  const handledata = (e) => {
    let selectedMode = e.target.value;
    setsortByPrice(selectedMode);
  };

  return (
    <div className='main'>
      <div className='selector'>
        <h3 className='countProduct'>
          {props.filterSize.length > 0
            ? `${props.filterSize.length}  Products `
            : `${props.data.length} Products`}
        </h3>
        <select value={sortByPrice} onChange={handledata}>
          <option>Select</option>
          <option value='lowest'>Lowest to highest</option>
          <option value='highest'>Highest to lowest</option>
        </select>
      </div>
      <Card
        sortByPrice={sortByPrice}
        data={props.data}
        filterSize={props.filterSize}
      />
    </div>
  );
}

export default Main;
