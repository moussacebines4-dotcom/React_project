import React from 'react'
import "./About.css"
import about from "./image.png"
export default function About({name , age}) {
    // const name = props.name
    // const age = props.age
  return (
    <div className='About'>
        <h2>Apropos de nos</h2>
        <p>bien veneut {name} qui a age de {age} ans sur notre site web </p>
        <img src={about} alt="" />
    </div>
  )
}
