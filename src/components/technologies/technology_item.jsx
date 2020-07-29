import React from 'react'

class TechnologyItem extends React.Component {
  render() {
    return (
      <div className="item">
        <img src={this.props.img_src} alt="name" className="img-fluid" />
        <h3>{this.props.name}</h3>
        <div className="desc">{this.props.desc}</div>
      </div>
    )
  }
}

export default TechnologyItem;