import './App.css';
import { Route } from 'react-router-dom';
import LinkMenu from './Components/LinkMenu';
import Home from './Components/Home';
import About from './Components/About';
import Student from './Components/Student';
import AboutMessage from './Components/About/AboutMessage';
function App() {
  return (
    <div className="App">
      <LinkMenu />
      <Route exact path='/' component={Home} />
      <Route path='/about'  >
        <About />
      </Route>
      <Route exact path='/student/:id' component={Student} />
    </div>
  );
}

export default App;
