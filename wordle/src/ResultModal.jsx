import React from "react";

export default function ResultModal({ answer, win, setOpenModal }) {
  return (
    <div className="wrapper">
      <div className="result-container">
        <p onClick={(e) => setOpenModal(false)}>X</p>
        {win == "won" ? (
          <p>Gefeliciteerd, het antwoord was</p>
        ) : (
          <p>Het antwoord was</p>
        )}
        <p className="answer">{answer}</p>
        <p> nieuwe Namedle</p>
        <button onClick={e => window.location.reload()}>New game</button>
      </div>
    </div>
  );
}
