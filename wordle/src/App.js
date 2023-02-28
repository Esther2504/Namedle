import { useState } from "react";

function App() {
const [guess, setGuess] = useState()
const [answer, setAnswer] = useState('tests')

console.log(`answer: ${answer}`)
console.log(`guess: ${guess}`)

// bij enter guess leegmaken naar volgende regel

const handleSubmit = () => {
  console.log('test')
  setGuess()
}

  return (
    <div className="App">
      <div style={{display:"flex"}}>
        <div className="character" style={{width:"50px",height:"50px",border:"3px solid green", fontSize:"1rem"}}>{guess?.charAt(0)}</div>
        <div className="character">{guess?.charAt(1)}</div>
        <div className="character">{guess?.charAt(2)}</div>
        <div className="character">{guess?.charAt(3)}</div>
        <div className="character">{guess?.charAt(4)}</div>
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
      <form>
      <input type="text" minLength="5" maxLength="5" onChange={e => setGuess(e.target.value)} />
      <button onClick={e => handleSubmit()}>Submit</button>
      </form>
    </div>
  );
}

export default App;
