import React from 'react'

const About = (props) => {
  return (
    <div className="about">
      <h1>{props.header}</h1>
      <p>{props.about}</p>
    </div>
  )
}

export default About;