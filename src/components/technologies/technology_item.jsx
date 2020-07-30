import React from 'react'

class TechnologyItem extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="desc jumbotron">
          <span className="bg-primary float-right mb-2 mx-2 p-2 rounded-lg small text-center text-light"><span className="font-weight-bold lead">{this.props.level}</span>/10</span>
          <h3 className="display-4">
        <img src={this.props.img_src} alt="name" className="d-inline-block img-fluid mr-3" />{this.props.name}</h3>
          {this.props.desc}
          </div>
      </div>
    )
  }
}

export default TechnologyItem;