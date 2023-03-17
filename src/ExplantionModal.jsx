import React from 'react'
import green from './example_green.PNG'
import yellow from './example_yellow.PNG'
import red from './example_red.PNG'

export default function ExplantionModal({setOpenModal}) {
  return (
    <div className="wrapper">
    <div className="result-container">
      <p className="cross" onClick={(e) => setOpenModal(false)}>X</p>
      <div className="content">
        <h1>Explanation</h1>
        <p>Inspired by the famous game Wordle, you have 6 attempts to guess the name.</p>
        <img src={red}></img>
        <p>None of the characters are in the name</p>
        <img src={yellow}></img>
        <p>The yellow character is in the name, but not in the right position</p>
        <img src={green}></img>
        <p>The green character is in the right position</p>
        </div>
    </div>
  </div>
  )
}
