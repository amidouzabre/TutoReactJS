import {createPortal} from "react-dom";

function App() {


  return <div style={{
      height: 300,
      overflowY: 'scroll',
      background: '#EEE',
      margin: 20,
      position: 'relative'
  }}>
      <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
      </p>

      <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
      </p>

      <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
      </p>
      <Modal/>

  </div>

}

function Modal () {
    return createPortal( <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10,
        border: 'solid 1px grey',
        background: "#FFF"
    }}>
        Je suis une modale.
    </div>, document.body)
}

export default App
