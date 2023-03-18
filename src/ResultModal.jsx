import React from "react";

export default function ResultModal({ answer, win, setOpenModal }) {
  return (
    <div className="wrapper">
      <div className="result-container">
        <p className="cross" onClick={(e) => setOpenModal(false)}>X</p>
        <div className="content">
          <div>
        {win === "won" ? (
          <p>Congratulations, the answer was</p>
        ) : (
          <p>The answer was</p>
        )}
        <p className="answer">{answer}</p>
        </div>
        <button className="new-game" onClick={e => window.location.reload()}>New game</button>
        </div>
      </div>
    </div>
  );
}
