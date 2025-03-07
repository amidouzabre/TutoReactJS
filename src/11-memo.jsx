import {Input} from "./components/forms/input.jsx";
import {memo, useCallback, useState} from "react";

function App() {

  const [name, setName] = useState("")

  /*
  const handleClick = useMemo(() => {
      return () => {
          console.log(("Hello"))
      }
  }, [])
   */
  const handleClick = useCallback(() => {
      console.log("Hello")
  }, [])

  return <div className="container my-2 vstack gap-2">
      <div>
        <Input label="Prenom" onChange={setName} value={name} />
        <div>
          {name.toUpperCase()}
        </div>
      </div>
      <InfoMemo onClick={handleClick} />
  </div>

}


const InfoMemo = memo( function Info ({onClick}) {
    return <div className="alert alert-info" onClick={onClick}>
        lorem ipsum
    </div>
})

export default App
