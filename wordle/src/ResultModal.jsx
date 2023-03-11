import React from 'react'

export default function ResultModal({answer, win, setOpenModal}) {
  return (
    <div className='wrapper'>
    <div className='result-container'>
        <p onClick={e => setOpenModal(false)}>X</p>
        {win ? <p>Gefeliciteerd, het antwoord was</p>
        :
<p>Het antwoord was</p>
    }
    <p className='answer'>{answer}</p>
    <p>Kom morgen terug voor een nieuwe Namedle</p>
    </div>
    </div>
  )
}
