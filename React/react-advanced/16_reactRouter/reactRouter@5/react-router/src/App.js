import './App.css';
import { Route } from 'react-router-dom';
import LinkMenu from './Components/LinkMenu';
import Home from './Components/Home';
import About from './Components/About';
import Student from './Components/Student';
function App() {
  return (
    <div className="App">
      <LinkMenu />
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/about' component={About} /> */}
      {/* <Route exact path='/about' component={() => {
        return <About />
      }} /> */}
      {/* <Route exact path='/about' component={(props) => {
        return <About {...props} />
      }} /> */}
      {/* <Route exact path='/about' render={(props) => {
        return <About {...props} />
      }} /> */}
      {/* <Route exact path='/about' children={(props) => {
        return <About {...props} />
      }} /> */}
      {/* <Route exact path='/about' children={<About />} /> */}
      {/* <Route exact path='/about'  >
        <About />
      </Route> */}
      <Route exact path='/about'  >
        {props => <About {...props} />}
      </Route>
      <Route exact path='/student/:id' component={Student} />
    </div>
  );
}

export default App;
