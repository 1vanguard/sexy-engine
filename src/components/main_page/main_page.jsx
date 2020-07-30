import React from 'react'

const MainPage = (props) => {
  return (
    <div className="main_page_content">
      <h1 className="font-weight-bold text-center">{props.mainPage}</h1>
    </div>
  )
}

export default MainPage;