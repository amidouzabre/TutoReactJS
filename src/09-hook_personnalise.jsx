import {useToggle} from "./hooks/useToggle.jsx";
import {useIncrement} from "./hooks/useIncrement.jsx";
import {useState} from "react";
import {useDocumentTitle} from "./hooks/useDocumentTitle.js";
import {Input} from "./components/forms/input.jsx";


function App() {

  const [checked, toggleCheck] = useToggle()
  const {count , increment, decrement} = useIncrement({
    base: 0,
    max: 10,
    min: 0,
    step: 1
  })

  const [name, setName] = useState('')
useDocumentTitle(name ? `Editer   ${name}` : null)

  return <div>
    <div>
      <input type="checkbox" checked={checked} onChange={toggleCheck} />
      {checked && "Je suis coché"}
    </div>

    <Input value={name} onChange={setName} label="Nom" />

    <div>
      Compteur : {count}
      <button onClick={increment}>Incrementer</button>
      <button onClick={decrement}>Decrementer</button>
    </div>

  </div>

}

export default App
