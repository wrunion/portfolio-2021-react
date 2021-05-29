import './App.scss'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import { Evictorbook, RoseCityResource, Epicodus } from './components/PortfolioItem'
import { About, Skills } from './components/Elements'
import './styles/main.scss'

const App = () => {

  return (
    <>
      <Nav />
      <div style={{marginLeft: '7em'}}>
      <Header />
      <About />
      </div>

      <main id="portfolio" className="project-div">
        <Evictorbook/>
        <Epicodus />
        <RoseCityResource />
      </main>
      <Skills />
      <Footer />
    </>
  )
}

export default App;
