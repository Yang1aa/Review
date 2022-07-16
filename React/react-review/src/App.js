import './App.css';
import Search from './Components/Search/Index.js';
import Item from './Components/Item/Index.js';
import ShopCar from './Components/ShopCar/Index';
import { useState } from 'react';

document.documentElement.style.fontSize = 100 / 750 + 'vw'

function App() {
  const [name, setName] = useState('');
  const [sumPrice, setSumPrice] = useState(0);
  const [count, setCount] = useState(0);
  console.log("sumPrice", sumPrice)
  console.log("count", count)
  console.log("name", name)
  return (
    <div>
      <Search setName={setName}></Search>
      <Item setSumPrice={setSumPrice} setCount={setCount} name={name}></Item>
      <ShopCar sumPrice={sumPrice} count={count}></ShopCar>
    </div>
  );
}

export default App;
