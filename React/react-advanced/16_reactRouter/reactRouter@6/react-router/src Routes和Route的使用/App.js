import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/about' element={<About />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
