import { Routes, Route } from "react-router-dom"
import HomePage from "./pageComponents/HomePage";
import Menu from "./pageComponents/Menu";
import ProfilePage from "./pageComponents/ProfilePage";
function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
