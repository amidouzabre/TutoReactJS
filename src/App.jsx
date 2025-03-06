import {useToggle} from "./hooks/useToggle.jsx";
import {useIncrement} from "./hooks/useIncrement.jsx";


function App() {

  const [checked, toggleCheck] = useToggle()
  const {count , increment, decrement} = useIncrement({
    base: 0,
    max: 10,
    min: 0,
    step: 1
  })


  return <div>
    <div>
      <input type="checkbox" checked={checked} onChange={toggleCheck} />
      {checked && "Je suis coché"}
    </div>

    <div>
      Compteur : {count}
      <button onClick={increment}>Incrementer</button>
      <button onClick={decrement}>Decrementer</button>
    </div>

  </div>

}

export default App
