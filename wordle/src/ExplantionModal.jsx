import React from 'react'

export default function ExplantionModal({setOpenModal}) {
  return (
    <div className="wrapper">
    <div className="result-container">
      <p className="cross" onClick={(e) => setOpenModal(false)}>X</p>
      <div className="content">
        </div>
    </div>
  </div>
  )
}
