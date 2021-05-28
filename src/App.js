import './App.scss'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import { Evictorbook, RoseCityResource } from './components/PortfolioItem'


const App = () => {

  return (
    <>
      <Nav />
      <Header />
      {/* <Footer /> */}
      <Evictorbook/>
      <RoseCityResource />
    </>
  )
}

export default App;
