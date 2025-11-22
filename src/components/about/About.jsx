import React from 'react'
import "./About.css"
import about from "./image.png"
export default function About({ name, age }) {
  // const name = props.name
  // const age = props.age
  return (
    <div className='About'>
      <h2>Apropos de nous</h2>
      <p>bienvenue {name} qui a l'age de {age} ans sur notre site web </p>
      <img src={about} alt="" />
    </div>
  )
}
