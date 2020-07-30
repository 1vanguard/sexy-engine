import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TechnologyLink extends React.Component {
  render() {
    let path = "/technologies/" + this.props.id
    return (
      <li className="list-inline-item">
        <NavLink to={path} className="nav-link">
          <FontAwesomeIcon icon={[`${this.props.icon_type}`, `${this.props.icon}`]} />
          {this.props.name}
        </NavLink>
      </li>
    )
  }
}

export default TechnologyLink;