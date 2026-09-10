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
import Products2 from "./Products2.jsx";

function App() {

  return (
    <>
      <Provider store={store}>
        <Products2 />
      </Provider>
    </>
  );
}

export default App;
