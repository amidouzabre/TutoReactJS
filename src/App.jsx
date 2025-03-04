import { useEffect, useState } from "react"
import { Checkbox } from "./components/forms/checkbox"
import { Input } from "./components/forms/input"


function App() {

  const [showInput, setshowInput] = useState(false)

  return <div className="container my-3 stack">
     <Checkbox 
        checked = {showInput} 
        onChange={setshowInput} 
        id = "titreshow"
        label="Afficher le champ titre"
      />
      {showInput && <EditTitle />}
      <div style={{height: "300vh"}}></div>

  </div>
}

function EditTitle () {
  const [title, setTitle] = useState('')
  const [firstname, setFirstname] = useState('')

  useEffect(() => {
    document.title = title
  }, [title]);

  return <div className="vstack gap-2">
      <Input 
        placeholder = "Modifier le titre"
        value = {title}
        onChange= {setTitle}
      />

      <Input 
        placeholder="Prenom"
        value = {firstname}
        onChange= {setFirstname}
      />


  </div>

}

export default App
