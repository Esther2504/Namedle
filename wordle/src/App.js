import { useState } from "react";
import './App.css'

function App() {
const [guess1, setGuess1] = useState()
const [isGuess1, setIsGuess1] = useState(false)
const [guess2, setGuess2] = useState()
const [guess3, setGuess3] = useState()
const [guess4, setGuess4] = useState()
const [guess5, setGuess5] = useState()
const [answer, setAnswer] = useState('tests')

console.log(`answer: ${answer}`)
console.log(`guess1: ${guess1}`)

console.log(isGuess1)

// bij enter guess leegmaken naar volgende regel

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(`guess1 length: ${guess1.length}`)
// if guess1 is filled with 5, set true
if (guess1.length = '5') {
  setIsGuess1(true)
}

  // if guess equals answer, become green
  // if theres no content, stay white. if there is, check if its equal to 
}

  return (
    <div className="App">
      <div className="guess">
        <p className="character">{guess1?.charAt(0)}</p>
        <p className="character">{guess1?.charAt(1)}</p>
        <p className="character">{guess1?.charAt(2)}</p>
        <p className="character">{guess1?.charAt(3)}</p>
        <p className="character">{guess1?.charAt(4)}</p>
      </div>
      <div className="guess">
        <p className="character">{guess2?.charAt(0)}</p>
        <p className="character">{guess2?.charAt(1)}</p>
        <p className="character">{guess2?.charAt(2)}</p>
        <p className="character">{guess2?.charAt(3)}</p>
        <p className="character">{guess2?.charAt(4)}</p>
      </div>
      <div className="guess">
        <p className="character">{guess3?.charAt(0)}</p>
        <p className="character">{guess3?.charAt(1)}</p>
        <p className="character">{guess3?.charAt(2)}</p>
        <p className="character">{guess3?.charAt(3)}</p>
        <p className="character">{guess3?.charAt(4)}</p>
      </div>
      <div className="guess">
        <p className="character">{guess4?.charAt(0)}</p>
        <p className="character">{guess4?.charAt(1)}</p>
        <p className="character">{guess4?.charAt(2)}</p>
        <p className="character">{guess4?.charAt(3)}</p>
        <p className="character">{guess4?.charAt(4)}</p>
      </div>
      <div className="guess">
        <p className="character">{guess5?.charAt(0)}</p>
        <p className="character">{guess5?.charAt(1)}</p>
        <p className="character">{guess5?.charAt(2)}</p>
        <p className="character">{guess5?.charAt(3)}</p>
        <p className="character">{guess5?.charAt(4)}</p>
      </div>
      <form>
      <input type="text" minLength="5" maxLength="5" required onChange={e => setGuess1(e.target.value)} />
      <input type="text" minLength="5" maxLength="5" required onChange={e => setGuess2(e.target.value)} />
      <input type="text" minLength="5" maxLength="5" required onChange={e => setGuess3(e.target.value)} />
      <input type="text" minLength="5" maxLength="5" required onChange={e => setGuess4(e.target.value)} />
      <input type="text" minLength="5" maxLength="5" required onChange={e => setGuess5(e.target.value)} />
      <button type="submit" onClick={e => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}

export default App;
