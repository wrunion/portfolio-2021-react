import React from 'react'
import './../styles/main.scss'

const DisplayVideo = ({url, id}) => {
  if (!url) { return null } 
  return (
    <div>
      <video controls width={id === "rose-city-resource" ? '350px' : '550px'} class="video-container">
        <source src={url} type="video/mp4" />

        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  )
}

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
    
      <DisplayVideo url={videoUrl} id={projectId} />
      <p class="mb-normal">
        {postVideoContent}
      </p>

      <div className="ui divider"></div>
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
    videoUrl="https://i.imgur.com/YbXJ32L.mp4"
    postVideoContent={<>
    <p className="strong">
      View the <a href="https://rosecityresource.streetroots.org/" target="_blank" rel="noreferrer">Rose City Resource Guide</a> live site
    </p>
    <div class="ui segment" style={{marginRight: '0', marginLeft: '0'}}>
    <p>At MAC I am currently: </p>
      <ul>
        <li>
          Creating an interactive user guide to help the Street Roots staff update their data more easily 
        </li>
        <li>
          Redesigning the  UI, which means creating wireframes with Figma, then bringing them to life in code. 
        </li>
        <li>
          I'm also co-lead on a spin-off project: Healthy Transitions, which is a collaboration with Portland State University. 
        </li>
        <li>
          Healthy Transitions is also a web app mapping tool, but with additional complexity and features. When it's complete, it will showcase mental health resources for youth in Oregon. 
        </li>
        <li>
          I'm the lead UX/UI developer on a team of 4.
        </li>
        <li>
          Since it's a small team, I wear more hats than that, including Product Owner, but the role I most enjoy and excel at is UX/UI development. 
        </li>
      </ul>
    </div></>}>
    <p>
      The Rose City Resource Guide is a collaboration between the Portland non-profit Street Roots, and the Mapping Action Collective (MAC). It's a searchable map of free and low-cost resources for houseless adults in Oregon.
    </p>
    <p>  
      I work at the Mapping Action Collective, and help maintain the site. I'm also creating technical documentation for Street Roots staff, and redesigning the entire UI, which has been exciting!   
    </p>

  </PortfolioItem>
)

export const Epicodus = () => (
  <PortfolioItem
    heading="NYC Social Service Search"
    projectId="epicodus"
    // videoUrl="https://i.imgur.com/YbXJ32L.mp4"
    postVideoContent={<>
      <a href="https://wrunion.github.io/epicodus-capstone/" target="_blank" rel="noreferrer">View the demo</a> | <a href="https://github.com/wrunion/epicodus-capstone" target="_blank" rel="noreferrer">View the code</a>
      </>}>
    <p>
      In 2020 I completed the JavaScript/React Front End Development Program at one of Portland's best known, in-person bootcamps: Epicodus. 
    </p>
    <p>
      For my Capstone Project, I found an open data API with data about 1000+ agencies that provide social services for women in NYC. Then I created <a href="https://wrunion.github.io/epicodus-capstone/" target="_blank" rel="noreferrer">NYC Women's Social Service Resource Finder</a>.
    </p>
    <p>
      Social services are a passion of mine; they provide people with everything from recreation to healthcare, and can improve people's quality of life. But information about these opportunities can be tricky to find, and confusing to access.
    </p>
    <p>
      Which is where my passion for UX in social service websites comes in!
    </p>
    <p class="work-text">
      This app allows users to search by up to three different categories, and a New York neighborhood, and then see resources that meet those requirements. 
    </p>
    <p>
      It's a bite-sized demo of what I do in my work now with the Mapping Action Collective - I collaborate with non-profits to get resources to as many people as possible, using data and design.
    </p>

</PortfolioItem>
)