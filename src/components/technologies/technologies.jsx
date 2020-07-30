import React from 'react'
import TechnologyLink from './technology_link'
import TechnologyItem from './technology_item'

const Technologies = (props) => {
  let linksList = props.technologies.map(
    technology => <TechnologyLink
      name={technology.name}
      id={technology.id}
      key={technology.id}
      icon_type={technology.icon_type}
      icon={technology.icon}
    /> )
  let technologies = props.technologies.map(
    technology => <TechnologyItem
      name={technology.name}
      desc={technology.desc}
      img_src={technology.img_src}
      key={technology.id}
      level={technology.level}
    /> )
  return (
    <div className="technologies">
      <h2 className="text-center">{props.header}</h2>
      <ul className="text-center list-inline">
        {linksList}
      </ul>
      <div className="technologies_list">
        {technologies}
      </div>
    </div>
  )
}

export default Technologies;