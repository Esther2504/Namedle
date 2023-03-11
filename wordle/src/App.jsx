import { useState } from "react";
import "./App.css";
import words from "./words.json"
import questionmark from "./questionmark.svg"
import moon from "./moon.svg"
import ResultModal from "./ResultModal";

function App() {
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState();
  const [answer, setAnswer] = useState(words[Math.floor(Math.random() * 400)].toLowerCase());
  const [guessesLeft, setguessesLeft] = useState(6);
  const [win, setWin] = useState(false)
  const [openModal, setOpenModal] = useState(false)

console.log(answer)

setInterval(function () {
    setAnswer(words[Math.floor(Math.random() * 400)].toLowerCase())
    setWin(false)
    localStorage.setItem("result", '');
}, 1000 * 60 * 60 * 24);


// Remove letters after going through loop? charat 0?

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guessesLeft > 0) {
      console.log(Array.from(guess));
      setGuess(Array.from(guess.toLowerCase));

      let colors = [];

      for (let i = 0; i < 5; i++) {
        if (guess.charAt(i) === answer.charAt(i)) {
          colors.push("#9DCD8C");
        } else if (answer.includes(guess.charAt(i))) {
          colors.push("#FEE4A7");
        } else {
          colors.push("#FED2BF");
        }
      }

      setGuesses([
        ...guesses,
        {
          guess: { guess },
          colors: { colors },
        },
      ]);

      document.getElementById("textbar").value = "";

      if (guess == answer) {
        setWin('won')
        setOpenModal(true)
        localStorage.setItem("result", 'won');
      }

      setGuess();

      setguessesLeft(guessesLeft - 1);

      if (guessesLeft == 1) {
        setWin('lost')
        setOpenModal(true)
        localStorage.setItem("result", 'lost');
      }
    }
  };

  let result = localStorage.getItem("result");


  return (
    <div className="App">
      {openModal ?
      <ResultModal win={win} answer={answer} setOpenModal={setOpenModal} result={result} />
      :
      null
    }
      
      <div className="top-bar">
        <img src={questionmark} />
        <h1>Namedle</h1>
        <img className="moon" src={moon} />
        </div>
        
      <div className="container">
        <div className="guess-container">
    
        {guesses.map((guess) => (
          <div className="guess">
            <p
              className="character"
              style={{
                backgroundColor: `${guess.colors.colors[0]}`,
                color: "white",
                borderColor: `${guess.colors.colors[0]}`,
              }}
            >
              {guess.guess.guess.charAt(0)}
            </p>
            <p
              className="character"
              style={{
                backgroundColor: `${guess.colors.colors[1]}`,
                color: "white",
                borderColor: `${guess.colors.colors[1]}`,
              }}
            >
              {guess.guess.guess.charAt(1)}
            </p>
            <p
              className="character"
              style={{
                backgroundColor: `${guess.colors.colors[2]}`,
                color: "white",
                borderColor: `${guess.colors.colors[2]}`,
              }}
            >
              {guess.guess.guess.charAt(2)}
            </p>
            <p
              className="character"
              style={{
                backgroundColor: `${guess.colors.colors[3]}`,
                color: "white",
                borderColor: `${guess.colors.colors[3]}`,
              }}
            >
              {guess.guess.guess.charAt(3)}
            </p>
            <p
              className="character"
              style={{
                backgroundColor: `${guess.colors.colors[4]}`,
                color: "white",
                borderColor: `${guess.colors.colors[4]}`,
              }}
            >
              {guess.guess.guess.charAt(4)}
            </p>
          </div>
        ))}
        {guessesLeft > 0 ? (
          <div className="guess">
            <p className="character">{guess?.charAt(0)}</p>
            <p className="character">{guess?.charAt(1)}</p>
            <p className="character">{guess?.charAt(2)}</p>
            <p className="character">{guess?.charAt(3)}</p>
            <p className="character">{guess?.charAt(4)}</p>
          </div>
        ) : null}
        {guessesLeft > 5 ? (
          <div className="guess">
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
          </div>
        ) : null}
        {guessesLeft > 4 ? (
          <div className="guess">
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
          </div>
        ) : null}
        {guessesLeft > 3 ? (
          <div className="guess">
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
          </div>
        ) : null}
        {guessesLeft > 2 ? (
          <div className="guess">
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
          </div>
        ) : null}
        {guessesLeft > 1 ? (
          <div className="guess">
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
            <p className="character"></p>
          </div>
        ) : null}
</div>
        {win ? (
           <form onSubmit={handleSubmit}>
           <input
             type="text"
             id="textbar"
             minLength="5"
             maxLength="5"
             disabled="disabled"
             required
             onChange={(e) => setGuess(e.target.value)}
           />
           <button type="submit">Enter</button>
         </form>
        )
      : (
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
      )
        }
      </div>
      <div className="bottom-bar"></div>
    </div>
  );
}

export default App;
