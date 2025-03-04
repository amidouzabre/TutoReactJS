import { useState } from "react"

function App() {

  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.target))
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const [checked, setChecked] = useState(true)
  const toogleCheck = () => {
    setChecked(!checked)
  }

  console.log('render', checked)


  return <form action="" onSubmit={handleSubmit}>

      {/* champ non controllé */}
      <input type="text" name="fisrtname" defaultValue="QWERTY"  />

      {/* champ controllé */}
      <textarea name="" id="" value={value} onChange={handleChange}></textarea>

      <input type="checkbox" checked={checked} onChange={toogleCheck} />
      
      <button disabled={!checked}>Envoyer</button>
  </form>
}

export default App
