import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Todos from "./Todos";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <Todos />
      </Provider>
    </>
  );
}

export default App;
