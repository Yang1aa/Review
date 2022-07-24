import './App.css';
import { Route } from 'react-router-dom';
import LinkMenu from './Components/LinkMenu';
import Home from './Components/Home';
import About from './Components/About';
function App() {
  return (
    <div className="App">
      <LinkMenu />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </div>
  );
}

export default App;
