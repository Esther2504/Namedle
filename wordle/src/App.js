import { useState } from "react";
import "./App.css";

function App() {
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState();
  const [answer, setAnswer] = useState("kinds");
  // const [colors, setColors] = useState([]);
  const [guessesLeft, setguessesLeft] = useState(6)

  console.log(`answer: ${answer}`);
  console.log(`guess: ${guess}`);

  console.log(guesses[0]);

  // console.log(colors)

  // bij enter guess leegmaken naar volgende regel

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`guess1 length: ${guesses[0].length}`)
    // if guess1 is filled with 5, set true

    if (guessesLeft > 0) {
   
      console.log(guess.charAt(0))
      console.log(answer.charAt(0))
      // aan array toevoegen

      console.log(Array.from(guess))
      setGuess(Array.from(guess))
      console.log(guess)

let colors = []

for (let i = 0; i < 5; i++) {
  if (guess.charAt(i) == answer.charAt(i)) {
    console.log('test')
    colors.push('green')
    console.log(colors)
  } else if (answer.includes(guess.charAt(i))) {
    console.log('test2')
    colors.push('yellow')
  } else {
    console.log('test3')
    colors.push('#B2B2B2')
  }
}

    setGuesses([...guesses, {
      guess: {guess},
      colors: {colors}
    }]);

    document.getElementById("textbar").value = "";

    setGuess();

    setguessesLeft(guessesLeft - 1)

 

    // if guess equals answer, become green
    // if theres no content, stay white. if there is, check if its equal to

    // map guesses on top, remove bottom guess



  }
  };

  console.log(guesses)

  return (
    <div className="App">
      <div className="container">
      {guesses.map((guess) => (
        <div className="guess">
          <p className="character" style={{backgroundColor:`${guess.colors.colors[0]}`,color:'white',borderColor:`${guess.colors.colors[0]}`}}>{guess.guess.guess.charAt(0)}</p>
          <p className="character" style={{backgroundColor:`${guess.colors.colors[1]}`,color:'white',borderColor:`${guess.colors.colors[1]}`}}>{guess.guess.guess.charAt(1)}</p>
          <p className="character" style={{backgroundColor:`${guess.colors.colors[2]}`,color:'white',borderColor:`${guess.colors.colors[2]}`}}>{guess.guess.guess.charAt(2)}</p>
          <p className="character" style={{backgroundColor:`${guess.colors.colors[3]}`,color:'white',borderColor:`${guess.colors.colors[3]}`}}>{guess.guess.guess.charAt(3)}</p>
          <p className="character" style={{backgroundColor:`${guess.colors.colors[4]}`,color:'white',borderColor:`${guess.colors.colors[4]}`}}>{guess.guess.guess.charAt(4)}</p>
        </div>
      ))}
      {guessesLeft > 0 ?
      <div className="guess">
        <p className="character">{guess?.charAt(0)}</p>
        <p className="character">{guess?.charAt(1)}</p>
        <p className="character">{guess?.charAt(2)}</p>
        <p className="character">{guess?.charAt(3)}</p>
        <p className="character">{guess?.charAt(4)}</p>
      </div>
      : null
}
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
    </div>
  );
}

export default App;
