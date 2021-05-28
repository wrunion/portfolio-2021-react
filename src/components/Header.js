import React from 'react'
import './../styles/main.scss'

// for icons
const iconStyle = {
  marginLeft: '4em',
  marginRight: '4em'
}

const Header = () => {
   return (

  <header>  
    <h1 className="ui header violet" 
    style={{marginTop: '.25em', marginLeft: '.5em'}}>
      <div className="content">
        Winter A. Runion
      </div>
      <div className="sub header">
        UX/UI Developer
      </div>
    </h1>
  
    <div className="header-icon-div">
      <a className="item" 
        href="https://github.com/wrunion" target="_blank" rel="noreferrer">
        <i className="ui icon github big grey link"></i>
      </a>
      <a className="item" 
        href="https://www.linkedin.com/in/wrunion/" target="_blank" rel="noreferrer">
        <i className="ui icon linkedin big grey link"></i>
      </a>
      <i className="ui icon bars big" onclick="toggle()"></i>
    </div>
    
    <p></p>
  </header>
   )
}

export default Header;