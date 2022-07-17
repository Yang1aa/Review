import './App.css';
import Search from './Components/Search/Index';
import Item from './Components/Item/Index';
import ShopCar from './Components/ShopCar/Index';
import Cover from './Components/Cover/index';
import { useEffect, useState } from 'react';

document.documentElement.style.fontSize = 100 / 750 + 'vw'

function App() {
  const [name, setName] = useState('');
  const [sumPrice, setSumPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [menuData, setMenuData] = useState([]);
  const [isBagShow, setIsBagShow] = useState(false);
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [data, setData] = useState([
    {
      id: '1',
      name: '汉堡1',
      price: 11,
      message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
    },
    {
      id: '2',
      name: '汉堡2',
      price: 12,
      message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
    },
    {
      id: '3',
      name: '汉堡3',
      price: 13,
      message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
    },
    {
      id: '4',
      name: '汉堡4',
      price: 14,
      message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
    },
    {
      id: '5',
      name: '汉堡5',
      price: 15,
      message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
    },
    {
      id: '6',
      name: '汉堡6',
      price: 16,
      message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
    }
  ])
  const [showData, setShowData] = useState([
    {
      id: '1',
      name: '汉堡1',
      price: 11,
      message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
    },
    {
      id: '2',
      name: '汉堡2',
      price: 12,
      message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
    },
    {
      id: '3',
      name: '汉堡3',
      price: 13,
      message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
    },
    {
      id: '4',
      name: '汉堡4',
      price: 14,
      message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
    },
    {
      id: '5',
      name: '汉堡5',
      price: 15,
      message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
    },
    {
      id: '6',
      name: '汉堡6',
      price: 16,
      message: '微干，里面搭配清凉的酸黄瓜加上洋葱圈和西红柿加上牛肉芝士正好，可以加两层牛肉饼',
    }
  ])
  const [bagClick, setBagClick] = useState(false);
  useEffect(() => {
    if (name) {
      let arr = showData.filter((item) => {
        return item.name === name;
      })
      setShowData([...arr]);
    } else {
      setShowData([...data]);
    }
  }, [name])
  return (
    <div>
      {
        isMenuShow ? <>123</> : <>
          {isBagShow && <Cover setSumPrice={setSumPrice} setCount={setCount} setMenuData={setMenuData} menuData={menuData} data={menuData} isBagShow={isBagShow} bagClick={bagClick} />}
          <Search setName={setName} />
          <Item setSumPrice={setSumPrice} setCount={setCount} setMenuData={setMenuData} menuData={menuData} data={showData} isBagShow={isBagShow} bagClick={bagClick} />
        </>
      }
      <ShopCar sumPrice={sumPrice} count={count} setIsBagShow={setIsBagShow} setIsMenuShow={setIsMenuShow} setBagClick={setBagClick} />
    </div >
  );
}

export default App;
