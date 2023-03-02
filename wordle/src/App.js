import { useState } from "react";
import './App.css'

function App() {
const [guesses, setGuesses] = useState([])
const [guess, setGuess] = useState()
const [answer, setAnswer] = useState('kinds')
const [color, setColor] = useState('')

console.log(`answer: ${answer}`)
console.log(`guess1: ${guess}`)

console.log(guesses[0])

// bij enter guess leegmaken naar volgende regel

const handleSubmit = (e) => {
  e.preventDefault();
  // console.log(`guess1 length: ${guesses[0].length}`)
// if guess1 is filled with 5, set true

setGuesses([...guesses, guess])

document.getElementById('textbar').value = '';

setGuess()

  // if guess equals answer, become green
  // if theres no content, stay white. if there is, check if its equal to 

  // map guesses on top, remove bottom guess

  if (guesses.length = 1) {
  // remove 
  console.log('hiii')

}
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
        <p className="character">{guess?.charAt(0)}</p>
        <p className="character">{guess?.charAt(1)}</p>
        <p className="character">{guess?.charAt(2)}</p>
        <p className="character">{guess?.charAt(3)}</p>
        <p className="character">{guess?.charAt(4)}</p>
      </div>
      <form onSubmit={handleSubmit}>
      <input type="text" id="textbar" minLength="5" maxLength="5" required onChange={e => setGuess(e.target.value)} />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
