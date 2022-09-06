import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import data from '../data/data.json';

const size = ['S', 'M', 'L', 'X', 'XL', 'XXL'];

function App() {
  const [sizes, setsizes] = useState([]);

  const handleSize = (s) => {
    let cloneData = [...sizes];
    if (cloneData.includes(s)) {
      setsizes(cloneData.filter((e) => e !== s));
    } else {
      cloneData.push(s);
      setsizes(cloneData);
    }
  };

  let filterSize = data.products.filter((item) =>
    item.availableSizes.some((s) => sizes.includes(s))
  );

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <div className='aside'>
          {size.map((s) => (
            <span
              key={s}
              className={sizes.includes(s) ? 'active-size circle' : 'circle'}
              onClick={() => handleSize(s)}
            >
              {s}
            </span>
          ))}
        </div>
        <Main filterSize={filterSize} data={data.products} />
      </div>
    </div>
  );
}

export default App;
