import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Todos from "./Todos";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import Users from "./Users.jsx";
import Products from "./Products.jsx";
import Counter from "./Counter.jsx";

function App() {

  return (
    <>
      <Provider store={store}>
        <Users />
      </Provider>
    </>
  );
}

export default App;
