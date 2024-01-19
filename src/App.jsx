import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
const App = () => {
  const [value, setValue] = useState(0);
  const [cartItems, setCartItems] = useState(value);

  const handleCartItems = (count) => {
    setCartItems(count);
  };

  const handleValue = () => {
    setValue(value);
  };

  return (
    <div className="container">
      <Header onShowCartItems={cartItems} />
      <Main onCounterChange={handleValue} onShowCartItems={handleCartItems} />
    </div>
  );
};

export default App;
