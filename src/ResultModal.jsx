import React from "react";

export default function ResultModal({
  answer,
  win,
  setOpenModal,
  guessesLeft,
}) {
  let guesses = 1;

  switch (guessesLeft) {
    case 5:
      guesses = 1;
      break;
    case 4:
      guesses = 2;
      break;
    case 3:
      guesses = 3;
      break;
    case 2:
      guesses = 4;
      break;
    case 1:
      guesses = 5;
      break;
    default:
      guesses = 6;
      break;
  }

  return (
    <div className="wrapper">
      <div className="result-container">
        <p className="cross" onClick={(e) => setOpenModal(false)}>
          X
        </p>
        <div className="content">
          <div>
            {win === "won" ? (
              <>
                <p>Congratulations, you got the answer in {guesses} guess(es)</p>
                {/* <p>The answer was:</p> */}
              </>
            ) : (
              <p>The answer was</p>
            )}
            <p className="answer">{answer}</p>
          </div>
          <button
            className="new-game"
            onClick={(e) => window.location.reload()}
          >
            New game
          </button>
        </div>
      </div>
    </div>
  );
}
