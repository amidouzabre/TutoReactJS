const title = "Bonjour les gens 2.0"
const showTitle = true

const todos = [
  "Présenter react",
  "Présenter le JSX",
  "Créer des composants"
]



function App() {

  return <>

      {showTitle? <Title id="monid" className="demo" data-demo="demo" color='blue' onClick >{title}</Title>: null}
      <input type="text" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio consectetur quo doloribus magni quaerat esse, ducimus similique. Expedita esse molestiae quisquam earum quos non deserunt voluptatum illum odio, praesentium qui!</p>

      <ul>
        {todos.map(todo =>(<li key={todo}>{todo}</li>))}
      </ul>
  </>
}

function Title ({color, hidden, ...props}) {
  if (hidden) {
    return null
  }

  return <h1 style={{color:color}} {...props} />
}

export default App
