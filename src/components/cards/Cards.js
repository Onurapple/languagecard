import React from 'react';
import { useState } from 'react';
import './Cards.css'

const Cards = (props) => {
    const [changer, changeState]= useState(true);

const showContent = ()=>{
    changeState(!changer)
}

  return (
    <div>
        {changer ? (<div className="myCard" onClick={showContent}>
          <img src={props.cardImg} alt="lang" className='myImg' />
          <h5 className='myTitle'>{props.cardName}</h5>
      </div>) : (<div className="myUL" onClick={showContent}>
          <ul>
              {props.cardOptions.map((item)=> <li>{item}</li>)}
          </ul>
      </div>)}
      
      
    </div>
  )
}

export default Cards
