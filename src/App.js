import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Explore from "./pages/Explore";
import Branchers from "./pages/Branchers";
import Menu from "./pages/Menu";
import FoodDetails from "./pages/FoodDetails";
import Layout from "./component/Layout";
import Dashboard from "./pages/Admin/Dashboard";
import Income from "./pages/Admin/Income";
import Review from "./pages/Admin/Review";
import AdminLayout from "./component/AdminLayout";
import Food from "./pages/Admin/Food";
import AdminFoodDetails from "./pages/Admin/AdminFoodDetails";
function App() {
  return (
    <div className="App">
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/branchers" element={<Branchers/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/menu/:id" element={<FoodDetails/>}/>

      <Route path="admin" element={<AdminLayout/>}>
        <Route index element={<Dashboard/>} />
        <Route path="review" element={<Review/>}/>
        <Route path="income" element={<Income/>}/>
        <Route path="food" element={<Food/>}/>
        <Route path="food/:id" element={<AdminFoodDetails/>}/>
      </Route>

      </Route>
   
    </Routes>
    </div>
  );
}

export default App;
