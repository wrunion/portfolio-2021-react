import React from 'react'
import './../styles/main.scss'

const DisplayVideo = ({url}) => (
  <div>
    <video controls width="550px" class="video-container">
      <source src={url} type="video/mp4" />

      Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
)

const PortfolioItem = ({ heading, children, projectId, videoUrl, postVideoContent }) => {

  return (
    <section class="project-div work-text" 
      style={{maxWidth: '550px', marginLeft: '3em'}}
      id={projectId}>
      <h3>
        <a>
          {heading}
        </a>
      </h3>
      
      {children}
    
      <DisplayVideo url={videoUrl} />
      <p class="mb-normal">
        {postVideoContent}
      </p>

      <div class="ui divider"></div>
    </section>
  )
}

export default PortfolioItem;

export const Evictorbook = () => (
  <PortfolioItem
    heading="Anti Eviction Mapping Tool (Evictorbook)"
    projectId="evictorbook"
    videoUrl="https://i.imgur.com/Rx0xupY.mp4"
    postVideoContent={`This mapping tool is not yet available for public viewing, but these images highlight the "eviction search" feature of the site.`}
  >
    <p>
      The Anti Eviction Mapping Tool (also known as “Evictorbook”) is an ongoing project with a team of 15+ people from all disciplines. On the Anti Eviction Mapping Tool I:
    </p>

    UX/UI Design and Development:
    <ul>
      <li>
        Trained under a UX developer with 7 years of industry experience
      </li>
      <li>
        Learned to organize, conduct, and analyze user interviews
      </li>
      <li>
        Took part in all stages of the UX Design process, from idea, to wireframes, to writing the code myself and actualizing the designs on the live site.
      </li>
    </ul>


    Front End Development: 
    <ul>
      <li>
        I also worked on the front end, using React the component libraries Antd Design and Material UI to create an accessible, mobile-friendly web application.
      </li>
      <li>
        I conducted a thorough accessibility audit of the application, then implemented the changes step by step, working with a team of 3.
      </li>
      <li>
        I also consulted on API design, and took part in collaborative design session with the data leads.
      </li>
    </ul>

  </PortfolioItem>
)

export const RoseCityResource = () => (
  <PortfolioItem
    heading="Rose City Resource Guide"
    projectId="rose-city-resource"
    videoUrl="https://i.imgur.com/Rx0xupY.mp4"
    postVideoContent={`This mapping tool is not yet available for public viewing, but these images highlight the "eviction search" feature of the site.`}
  >

  </PortfolioItem>
)

