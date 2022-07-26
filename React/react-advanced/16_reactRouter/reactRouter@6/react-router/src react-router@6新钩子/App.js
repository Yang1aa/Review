import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Student from './components/Student';
function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/about' element={<About />}>
        </Route>
        <Route path='/student/:id' element={<Student />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
