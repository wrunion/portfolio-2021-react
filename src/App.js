import './App.scss'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import { Evictorbook } from './components/PortfolioItem'


const App = () => {

  return (
    <>
      <Nav />
      <Header />
      {/* <Footer /> */}
      <Evictorbook/>
    </>
  )
}

export default App;
