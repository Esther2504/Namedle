import { useState } from "react";
import './App.css'

function App() {
const [guesses, setGuesses] = useState([])
const [guess1, setGuess1] = useState()
const [isGuess1, setIsGuess1] = useState(false)
const [guess2, setGuess2] = useState()
const [guess3, setGuess3] = useState()
const [guess4, setGuess4] = useState()
const [guess5, setGuess5] = useState()
const [answer, setAnswer] = useState('kinds')

console.log(`answer: ${answer}`)
console.log(`guess1: ${guess1}`)

console.log(guesses[0])

// bij enter guess leegmaken naar volgende regel

const handleSubmit = (e) => {
  e.preventDefault()
  // console.log(`guess1 length: ${guesses[0].length}`)
// if guess1 is filled with 5, set true


setGuesses([...guesses, guess1])

document.getElementById('textbar').value = '';

  // if guess equals answer, become green
  // if theres no content, stay white. if there is, check if its equal to 

  // map guesses on top, remove bottom guess
}

if (guesses[0]?.charAt(0) === answer?.charAt(0)) {
  console.log('yes!')
}

  return (
    <div className="App">
{guesses.map(guess =>
  <div className="guess">
  <p className="character">{guess?.charAt(0)}</p>
  <p className="character">{guess?.charAt(1)}</p>
  <p className="character">{guess?.charAt(2)}</p>
  <p className="character">{guess?.charAt(3)}</p>
  <p className="character">{guess?.charAt(4)}</p>
</div>
)}

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
      <input type="text" id="textbar" minLength="5" maxLength="5" required onChange={e => setGuess1(e.target.value)} />
      {/* <input type="text" minLength="5" maxLength="5" required onChange={e => setGuess2(e.target.value)} />
      <input type="text" minLength="5" maxLength="5" required onChange={e => setGuess3(e.target.value)} />
      <input type="text" minLength="5" maxLength="5" required onChange={e => setGuess4(e.target.value)} />
      <input type="text" minLength="5" maxLength="5" required onChange={e => setGuess5(e.target.value)} /> */}
      <button type="submit" onClick={e => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}

export default App;
