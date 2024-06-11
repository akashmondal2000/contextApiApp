// import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {

  return (
    <UserContextProvider >
    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vitae iusto aperiam!</h1>
    <Login/>
    <Profile/>

    </UserContextProvider>
  );
};

export default App;
