import { useState } from "react";
import "./App.css";

function App() {
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState();
  const [answer, setAnswer] = useState("kinds");
  const [guessesLeft, setguessesLeft] = useState(6)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guessesLeft > 0) {

      console.log(Array.from(guess))
      setGuess(Array.from(guess))

let colors = []

for (let i = 0; i < 5; i++) {
  if (guess.charAt(i) == answer.charAt(i)) {
    console.log('test')
    colors.push('#9DCD8C')
    console.log(colors)
  } else if (answer.includes(guess.charAt(i))) {
    console.log('test2')
    colors.push('#FEE4A7')
  } else {
    console.log('test3')
    colors.push('#FED2BF')
  }
}

    setGuesses([...guesses, {
      guess: {guess},
      colors: {colors}
    }]);

    document.getElementById("textbar").value = "";

    if (guess == answer){
alert('you won!')
  };

    setGuess();

    setguessesLeft(guessesLeft - 1)

    console.log(guessesLeft)
    console.log(guessesLeft == 0)
    if (guessesLeft == 1) {
      console.log('test')
      alert('Sorry, you lost')
    }

  } 

  }



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
