import {Input} from "./components/forms/input.jsx";
import {useFetch} from "./hooks/useFetch.js";


function App() {

  const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')

  return <div>
    {loading && <div className="spinner-border" role="status" >
      <span className="visually-hidden">Loading...</span>
    </div>}
    {errors && <div className="alert alert-danger">{ errors.toString() }</div>}
    {data && <div>
        <ul>
          { data.map(post => (<li key={post.id}>{post.title}</li>)) }
        </ul>
      </div>
    }
  </div>

}

export default App
