import { Route, Switch } from 'react-router-dom';
import LinkMenu from './Components/LinkMenu';
import Home from './Components/Home';
import About from './Components/About';
import Student from './Components/Student';
function App() {
  return (
    <div className="App">
      <LinkMenu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about'  >
          <About />
        </Route>
        <Route exact path='/student/:id' component={Student} />
        <Route path="*">
          <div>路径错误</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
