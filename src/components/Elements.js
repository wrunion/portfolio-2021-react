import React from 'react'
import './../styles/main.scss'

export const About = () => {
  return (
    <div className="about-div">

      <div className="about-image">
        <img src="https://i.imgur.com/ojAeOsa.png" 
          alt="Portrait of a white woman with brown hair and glasses in a red plaid collared shirt" 
          className="ui image left aligned circular medium" />
      </div>

      <div className="about-text body-text">
        <p>
          I'm a UX/UI Developer based in Portland, Oregon.
        </p>
        <p>
          My favorite tools include: JavaScript, React, Figma, and good ol' fashioned HTML, and CSS.
        </p>
        <p>
          If it's technology that can create user experiences, I'm there.
        </p>
      </div>

    </div>
  )
}

export const Skills = () => {
  return (
  <>
  <div style={{maxWidth: '550px', marginLeft: '7em'}} className="ui segment">
    <h2>Skills</h2>

    <p className="strong">
      I'm a UX/UI designer with a background in visual art and strong skills in Front End web development. My skills include:
    </p>

  <section id="front-end">
  Front End Web Development
    <ul>
      <li>
        JavaScript/React
      </li>
      <li>
        React component libraries, including Semantic UI, Material UI, and Bootstrap React
      </li>
      <li>
        HTML/CSS/SASS
      </li>
      <li>
        If it's code that creates something for the user to see, I want to be there. 
      </li>
    </ul>
  </section>

  <section id="ux-ui">
  UX/UI Design and Development
    <ul>
      <li>
        Creating wireframes and prototypes
      </li>
      <li>
        Coordinating and conducting user research 
      </li>
      <li>
        Using research insights to create user journeys and user flows
      </li>
      <li>
        Bringing designs to life with React and CSS
      </li>
    </ul>
  </section>

  <section id="full-stack">
  Full Stack Development: 
    <ul>
      <li>
        API creation with Node.js and Express
      </li>
      <li>
        Working understanding of SQL, including PostgreSQL
      </li>
      <li>
        User authentication with Passport.js
      </li>
      <li>
        Deploying applications on Heroku
      </li>
      <li>
        Building out static sites using EJS (Embedded JavaScript Templates)
      </li>
    </ul>
  </section>

  <section id="education">
    I have: 
    <ul>
      <li>
        A Bachelor's of Art in Visual Art
      </li>
      <li>
        5 years of experience in design and digital photography for my own design business
      </li>
      <li>
        A JavaScript/React Front End Web Development Certification from Epicodus
      </li>
      <li>
        A creative drive that never lets up
      </li>
    </ul>
  </section>


  I can: 
  <ul>
    <li>
      Communicate clearly and effectively with teammates and clients
    </li>
    <li>
      Work well on my own
    </li>
    <li>
      Work well in diverse, interdisciplinary teams
    </li>
  </ul>

  I'm passionate about: 
  <ul>
    <li>
      Web accessibility, first and foremost. Everyone should be able to access and enjoy everything I create
    </li>
    <li>
      Equal access to healthcare and housing
    </li>
    <li>
      Design justice, including language agnostic design
    </li>
  </ul>

  <p>
    In my free time I visit parks, read too much, and tango dance.
  </p>

  <div className="ui divider"></div>

  <section id="contact">
    <h2>Contact</h2>
    <p>
      You can find me on <a href="https://github.com/wrunion" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://www.linkedin.com/in/wrunion/" target="_blank" rel="noreferrer">LinkedIn</a>.
    </p>
  </section>
</div>
</>
)
  }