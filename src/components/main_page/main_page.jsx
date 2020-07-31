import React from 'react'

const MainPage = (props) => {
  return (
    <div className="main_page_content">
      <p className="font-weight-bold lead text-center">{props.mainPage}</p>
    </div>
  )
}

export default MainPage;