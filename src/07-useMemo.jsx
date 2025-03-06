import { useMemo, useState } from "react"
import { Input } from "./components/forms/input"


function App() {

  const [firstname, setFirstname] = useState("")
  const [password, setPassword] = useState("MotDePasse")

  // Avec dependance
  const security = useMemo(() => {
      return passwordSecurity(password)
  }, [password])

  // Sans dependance
  const random = useMemo(() => Math.random(), [])

  return <div className="container my-3 vstack gap-2">
    {random}
    <Input 
      label="Nom d'utilisateur"
      value={firstname}
      onChange={setFirstname}
    />

    <div>
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      Sécurité : {security}
    </div>

  </div>
}


function passwordSecurity (password) {

  let startTime = performance.now();
  while (performance.now() - startTime < 200) {
    1 + 1
  }

  if (password.length < 3) {
    return 'Faible';
  } else if (password.length < 6) {
    return 'Moyen'
  }
  return 'Fort'
}



export default App
