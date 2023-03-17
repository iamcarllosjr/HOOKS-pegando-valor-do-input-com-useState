import { useState } from "react";

import "./App.css";

const App = () => {

  //useState = visualizar o valor, alterar o valor
  const [valor, setValor] = useState ("");

  const handleChange = (e) => {
    setValor(e.target.value);
    //pegando valor no input e imprimindo na tela
  };


  return (
    <div className="app">
      <h1>Valor do Input</h1>
      <br />
      <input type="text" onChange={handleChange} />
      <p>{valor}</p>
    </div>
  )
} 

export default App;