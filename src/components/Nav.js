import React from 'react'

const Nav = () => {

  return (
    <nav>
    <div className="ui vertical right fixed menu" id="menu-div">
      <div className="item">
        <div className="header" id="header-title">
          <i className="ui icon bars center aligned dark-grey-text" onclick="toggle()"></i>
          Winter A. Runion
        </div>
        </div>
        <div className="item">
          <a className="header">About</a>
        </div>
        <div className="item">
          <a className="header">Work</a>
          <div className="menu">
            <a className="item">Anti-Eviction Map</a>
            <a className="item">NYC Service Search</a>
            <a className="item">Rose City Resource</a>
          </div>
        </div>
        <div className="item">
          <a className="header">Skills</a>
          <div className="menu">
            <a className="item">UX/UI Design</a>
            <a className="item">Front End/React</a>
            <a className="item">Full Stack Development</a>
            <a className="item">Education</a>
          </div>
        </div>
        <div className="item">
          <a className="header">Contact</a>
            <div className="menu">
              <a className="item" href="https://www.linkedin.com/in/wrunion/" target="_blank" rel="noreferrer">
                <i className="ui icon linkedin alternate large"></i> LinkedIn
              </a>
              <a className="item" href="https://github.com/wrunion" target="_blank" rel="noreferrer">
                <i className="ui icon github large"></i> Github
              </a>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;