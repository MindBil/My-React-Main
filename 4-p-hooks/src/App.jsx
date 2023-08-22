 import {useState} from "react";

function App() {
  const [balance, setBalance] = useState(2000);
  const [colorChanger, setColorChanger] = useState(null);

  const addMoney = () => {
    setBalance(balance + 500);

    setColorChanger("green");
  };

  const takeMoney = () => {
    if (balance >= 500) {
      setBalance(balance - 500);
      setColorChanger("blue");
    }
  };

  const takeAllMoney = () => {
    setBalance(0);
    setColorChanger("red");
  };

  return (
    <div className="App">
      <h1>SwedBank Bankomatas</h1>
      <div className="balance">Likutis: Eur {balance}</div>
      <div className="buttons">
        <button onClick={addMoney}>Ideti 500 Eur</button>
        <button onClick={takeMoney}>Paimti 500 Eur</button>
        <button onClick={takeAllMoney}>Paimti viska</button>
      </div>
      <div className="circle" style={{ backgroundColor: colorChanger}}></div>
    </div>
  );
}

export default App;