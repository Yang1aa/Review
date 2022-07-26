import { Routes, Route } from "react-router-dom"
import HomePage from "./pageComponents/HomePage";
import Menu from "./components/Menu";
import ProfilePage from "./pageComponents/ProfilePage";
import LoginPage from "./pageComponents/LoginPage";
import './App.css'
function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>    
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
