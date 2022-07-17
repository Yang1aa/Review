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
  const [menuData, setMenuData] = useState([]);
  return (
    <div>
      <Search setName={setName}></Search>
      <Item setSumPrice={setSumPrice} setCount={setCount} setMenuData={setMenuData}></Item>
      <ShopCar sumPrice={sumPrice} count={count} menuData={menuData}></ShopCar>
    </div >
  );
}

export default App;
