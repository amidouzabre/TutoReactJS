import { useRef } from "react"
import { Input } from "./components/forms/input"


function App() {

  const ref = useRef()
  console.log("App", ref)
 

  return <div>
      <Input ref={ref} label="prefix" />

  </div>
}

export default App
