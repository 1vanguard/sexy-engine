import React from 'react'
import TechnologyLink from './technology_link'
import TechnologyItem from './technology_item'

const Technologies = (props) => {
  let technologiesList = props.technologies
  let linksList = technologiesList.map( technology => <TechnologyLink name={technology.name} id={technology.id} key={technology.id} /> )
  let technologies = technologiesList.map( technology => <TechnologyItem name={technology.name} desc={technology.desc} img_src={technology.img_src} key={technology.id} /> )
  return (
    <div className="technologies">
      <h2 className="text-center">Могу, умею, практикую</h2>
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