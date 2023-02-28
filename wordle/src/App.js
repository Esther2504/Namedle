import { useState } from "react";

function App() {
const [guess, setGuess] = useState()
const [answer, setAnswer] = useState()

  return (
    <div className="App">
      <div style={{display:"flex"}}>
        <div>g</div>
        <div>u</div>
        <div>e</div>
        <div>s</div>
        <div>s</div>
      </div>
      <div style={{display:"flex"}}>
        <div>g</div>
        <div>u</div>
        <div>e</div>
        <div>s</div>
        <div>s</div>
      </div>
      <div style={{display:"flex"}}>
        <div>g</div>
        <div>u</div>
        <div>e</div>
        <div>s</div>
        <div>s</div>
      </div>
      <div style={{display:"flex"}}>
        <div>g</div>
        <div>u</div>
        <div>e</div>
        <div>s</div>
        <div>s</div>
      </div>
      <div style={{display:"flex"}}>
        <div>g</div>
        <div>u</div>
        <div>e</div>
        <div>s</div>
        <div>s</div>
      </div>
      <div style={{display:"flex"}}>
        <div>g</div>
        <div>u</div>
        <div>e</div>
        <div>s</div>
        <div>s</div>
      </div>
      <input type="text" maxLength="5" onChange={e => setGuess(e.target.value)} />
    </div>
  );
}

export default App;
