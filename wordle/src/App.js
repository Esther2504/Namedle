import { useState } from "react";
import "./App.css";

function App() {
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState();
  const [answer, setAnswer] = useState("kinds");
  const [color, setColor] = useState("");
  const [guessesLeft, setguessesLeft] = useState(6)

  console.log(`answer: ${answer}`);
  console.log(`guess1: ${guess}`);

  console.log(guesses[0]);

  // bij enter guess leegmaken naar volgende regel

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`guess1 length: ${guesses[0].length}`)
    // if guess1 is filled with 5, set true

    if (guessesLeft > 1) {
      
   

    setGuesses([...guesses, guess]);

    // Naast guess ook een kleur meegeven 
    // {
    //   guess:
    //   kleuren:
    // }

    // if guess[0] is answer[0] = groen
    // if answer includes guess[0] = orange

    document.getElementById("textbar").value = "";

    setGuess();

    setguessesLeft(guessesLeft - 1)

 

    // if guess equals answer, become green
    // if theres no content, stay white. if there is, check if its equal to

    // map guesses on top, remove bottom guess



  }
  };


  return (
    <div className="App">
      {guesses.map((guess) => (
        <div className="guess">
          <p className="character">{guess?.charAt(0)}</p>
          <p className="character">{guess?.charAt(1)}</p>
          <p className="character">{guess?.charAt(2)}</p>
          <p className="character">{guess?.charAt(3)}</p>
          <p className="character">{guess?.charAt(4)}</p>
        </div>
      ))}
      <div className="guess">
        <p className="character">{guess?.charAt(0)}</p>
        <p className="character">{guess?.charAt(1)}</p>
        <p className="character">{guess?.charAt(2)}</p>
        <p className="character">{guess?.charAt(3)}</p>
        <p className="character">{guess?.charAt(4)}</p>
      </div>
{guessesLeft > 5 ?
      <div className="guess">
      <p className="character"></p>
      <p className="character"></p>
      <p className="character"></p>
      <p className="character"></p>
      <p className="character"></p>
    </div>
: 
null}
{guessesLeft > 4 ?
<div className="guess">
<p className="character"></p>
<p className="character"></p>
<p className="character"></p>
<p className="character"></p>
<p className="character"></p>
</div>
: 
null
}
{guessesLeft > 3 ?
<div className="guess">
<p className="character"></p>
<p className="character"></p>
<p className="character"></p>
<p className="character"></p>
<p className="character"></p>
</div>
: 
null
}
{guessesLeft > 2 ?
<div className="guess">
<p className="character"></p>
<p className="character"></p>
<p className="character"></p>
<p className="character"></p>
<p className="character"></p>
</div>
: 
null
}
{guessesLeft > 1 ?
<div className="guess">
<p className="character"></p>
<p className="character"></p>
<p className="character"></p>
<p className="character"></p>
<p className="character"></p>
</div>
: 
null
}

  

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="textbar"
          minLength="5"
          maxLength="5"
          required
          onChange={(e) => setGuess(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default App;
