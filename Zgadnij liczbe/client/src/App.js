import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(Number);
  const [chances, setChances] = useState(Boolean);
  const [ans, setAns] = useState(Number);
  const [status, setStatus] = useState('');

  const generateRandomNum = () => {
    const random = Math.floor(Math.random() * (10 - 1) + 1);
    setNumber(random);
    setStatus("Wylosowano liczbę!")
    return setChances(true);
  }

  const answer = () => {
    if (chances && ans !== number) {
      return setStatus("Źle, pozostał ostatnia szansa");
    }
    if (!chances && ans !== number) {
      return setStatus("Przegrałeś!" + " | Liczba to: " + number);
    } 
    if (ans === number) {
      return setStatus('Wygrałeś!')
    }
  }

  return (
    <div className="App">
      <h1 style={{fontSize: '30px', marginBottom: '10px'}}>Losowanie liczby</h1><br/><br/>
      <button style={{fontSize: '30px', marginBottom: '10px'}} onClick={() => {return generateRandomNum();}}>Losuj</button><br/>
      <input type={'number'} onChange={(e) => {return setAns(e.target.value);}}></input><br/>
      <button style={{fontSize: '30px', marginBottom: '10px'}} onClick={() => {return answer();}}>Zgadnij</button><br/>
      <h1>{status}</h1>
    </div>
  );
}

export default App;
