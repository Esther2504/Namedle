import { useState } from "react";
import "./App.css";
import words from "./words.json";
import names from "./names.json";
import questionmark from "./questionmark.svg";
import moon from "./moon.svg";
import sun from "./sun.svg";
import ResultModal from "./ResultModal";
import ExplantionModal from "./ExplantionModal";

function App() {
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState();
  const [answer, setAnswer] = useState(
    names[Math.floor(Math.random() * 465)].toLowerCase()
  );
  const [guessesLeft, setguessesLeft] = useState(6);
  const [win, setWin] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [dark, setDark] = useState();

  console.log(answer);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guessesLeft > 0) {
      console.log(Array.from(guess));
      setGuess(Array.from(guess.toLowerCase));

      let colors = [];

      if (dark) {
        for (let i = 0; i < 5; i++) {
          if (guess.charAt(i) === answer.charAt(i)) {
            colors.push("rgb(157, 205, 140, 0.5)");
          } else if (answer.includes(guess.charAt(i))) {
            colors.push("rgb(254, 228, 167, 0.5");
          } else {
            colors.push("rgb(254, 210, 191, 0.5)");
          }
        }
      } else {
        for (let i = 0; i < 5; i++) {
          if (guess.charAt(i) === answer.charAt(i)) {
            colors.push("#9DCD8C");
          } else if (answer.includes(guess.charAt(i))) {
            colors.push("#FEE4A7");
          } else {
            colors.push("#FED2BF");
          }
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
        setWin("won");
        setOpenModal("result");
        localStorage.setItem("result", "won");
      }

      document.body.addEventListener("click", function () {
        setOpenModal(false);
      });

      setGuess();

      setguessesLeft(guessesLeft - 1);

      let correctguesses = colors.filter((x) => x == "#9DCD8C").length;

      if (guessesLeft == 1 && correctguesses !== 5) {
        setWin("lost");
        setOpenModal("result");
        localStorage.setItem("result", "lost");
      }
    }
  };

  let result = localStorage.getItem("result");

  return (
    <div className={`App ${dark}`}>
      {openModal == "result" ? (
        <ResultModal
          win={win}
          answer={answer}
          setOpenModal={setOpenModal}
          result={result}
          guessesLeft={guessesLeft}
        />
      ) : openModal == "explanation" ? (
        <ExplantionModal
          win={win}
          answer={answer}
          setOpenModal={setOpenModal}
          result={result}
        />
      ) : null}

      <div className="top-bar">
        <img
          alt="question mark"
          className="question-mark"
          onClick={(e) => setOpenModal("explanation")}
          src={questionmark}
        />
        <h1>Namedle</h1>
        {dark ? (
          <img
            alt="sun"
            className="moon"
            src={sun}
            onClick={(e) => setDark()}
          />
        ) : (
          <img
            alt="moon"
            className="moon"
            src={moon}
            onClick={(e) => setDark("dark")}
          />
        )}
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
          <form onSubmit={(e) => window.location.reload()}>
            <input type="text" id="textbar" disabled="disabled" />
            <button type="submit">New game</button>
          </form>
        ) : (
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
        )}
      </div>
      <div className="bottom-bar"></div>
    </div>
  );
}

export default App;
