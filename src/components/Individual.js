import React from 'react'
import "./Individual.css"

function Individual(props) {
  return (
    <div className='outer'>
      <div className='inline-rank'>{props.rank}</div>
      <div className='inline-name'>{props.name}</div>
      <div className='inline-score'>{props.score}</div>
    </div>
  )
}

export default Individual
