import React from 'react'
import './StarNight.css'
import strip from '../../Images/starNightStrip.png'
import btnlft from '../../Images/circle-left.png'
import btnright from '../../Images/circle-right.png'

function StarNight() {
  return (
    <div className='StarNight'>
      <img className="strip" src={strip} alt="" />
      <img className="circlelftBtn" src={btnlft} alt="" />
      <img className="circlerightBtn" src={btnright} alt="" />
    </div>
  )
}

export default StarNight
