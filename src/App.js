import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Explore from "./pages/Explore";
import Branchers from "./pages/Branchers";
import Menu from "./pages/Menu";
import FoodDetails from "./pages/FoodDetails";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/branchers" element={<Branchers/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/menu/:id" element={<FoodDetails/>}/>
    </Routes>
    </div>
  );
}

export default App;
