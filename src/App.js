import {Route, Routes , BrowserRouter} from "react-router-dom"
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Auth from "./pages/Auth";
import Category from "./pages/Category";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import axios from "axios";
function App() {
  const token=localStorage.getItem("token")
  axios.defaults.headers.post[
    "Access-Control-Allow-Origin"
  ] = "*";
  axios.defaults.headers.common = {
    "x-access-token": token,
    "Content-Type": "application/json",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="auth" element={<Auth/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="category" element={<Category/>}/>
        <Route path="edit" element={<Edit/>}/>
      </Routes>
      <Search/>
      <Navigation/>
    </BrowserRouter>
  );
}

export default App;
