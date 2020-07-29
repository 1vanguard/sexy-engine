import React from 'react'
import { NavLink } from 'react-router-dom'

class TechnologyLink extends React.Component {
  render() {
    let path = "/technologies/" + this.props.id
    return (
      <li className="list-inline-item">
        <NavLink to={path}>{this.props.name}</NavLink>
      </li>
    )
  }
}

export default TechnologyLink;