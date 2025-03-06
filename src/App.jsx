import { useEffect, useState } from "react"
import { Checkbox } from "./components/forms/checkbox"
import { Input } from "./components/forms/input"


function App() {

  const [showInput, setshowInput] = useState(true)

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
  const [y, setY] = useState(0)

  useEffect(() => {
    document.title = title
  }, [title]);


  useEffect(() => {

    const handler = (e) => {
      console.log("scroll")
      setY(window.scrollY)
    }

    window.addEventListener('scroll', handler)

    // Netoyage addEventLisner
    return () => {
      window.removeEventListener('scroll', handler)
    }

  }, []);

  

  return <div className="vstack gap-2">
      <div>
        Scroll : {y}
      </div>
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

      <div style={{height: '300vh'}}></div>

  </div>

}

export default App
