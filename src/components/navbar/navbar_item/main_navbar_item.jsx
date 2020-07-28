import React from 'react'
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

class MainNavbarItem extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? ' active' : '';
  }
  render() {
    return (
      <li className={`nav-item${this.getNavLinkClass(this.props.href)}`}>
        <NavLink className="nav-link" to={this.props.href} activeClassName="">{this.props.text}<span className="sr-only">{this.props.sr}</span></NavLink>
      </li>
    )
  }
}
MainNavbarItem = withRouter(MainNavbarItem);

export default MainNavbarItem;