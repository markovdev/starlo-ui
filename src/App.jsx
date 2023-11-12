import { useEffect, useState } from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import "./assets/css/style.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddRoom from "./pages/AddRoom";
import Me from "./pages/Me";
import Room from "./pages/Room";
import About from "./pages/About";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import { useDispatch } from "react-redux";
import Loader from "./components/UI/Loader/Loader";
import Orders from "./pages/Orders";
import useHttp from "./hooks/http";
import { authSuccess } from "./store/actions";
import useLogout from "./hooks/useLogout";
import Message from "./components/UI/Message/Message";
let logoutTimer;

function App({ loginToken, name, photo, status, id, token, checkUser }) {
  const [isLoading, setIsLoading] = useState(true);
  const [tokenExpDate, setTokenExpDate] = useState(null);
  const dispatch = useDispatch();
  window.addEventListener("load", () => {
    setIsLoading(false);
    document.querySelector("body").style.overflowY = "visible";
  });
  const { logout } = useLogout();

  useEffect(() => {
    if (token && tokenExpDate) {
      const remainingTime =
        new Date(tokenExpDate).getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpDate]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      dispatch(authSuccess(user.name, user.photo, user.token, user.role));
    }
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Message text={"Test"} />
      {isLoading ? <Loader /> : null}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/me" exact element={<Me />} />
        <Route path="/addRoom" exact element={<AddRoom />} />
        <Route path="/room/:slug" exact element={<Room />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/orders" exact element={<Orders />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>{" "}
      <Footer />
    </div>
  );
}

export default App;
