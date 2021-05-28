import React from 'react'
import './../styles/main.scss'

const Footer = () => {
  return (
    <footer>
      
      <div style={{marginLeft: '3em'}}>
        <a>
          Winter A. Runion | 2021
        </a>
        <a class="item"  
        href="https://github.com/wrunion" target="_blank" rel="noreferrer">
          <i class="ui icon link grey github large"></i> 
        </a>  
        <a class="item" href="https://www.linkedin.com/in/wrunion/" target="_blank" rel="noreferrer">
          <i class="ui icon link grey linkedin large"></i> 
        </a>
      
      </div>
    </footer>
  )
}

export default Footer;