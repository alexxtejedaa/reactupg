import './assets/css/Test.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Logosection from './components/Logosection'
import Footer from './components/Footer'
import Appfeatures from './components/Appfeatures'
import Howdoesitwork from './components/Howdoesitwork'
import Monertransfersection from './components/Moneytransfersection'
import Testimonialssection from './components/Testimonialssection'
import Faqsection from './components/Faqsection'
import Subscribewrapper from './components/Subscribewrapper'


function App() {



  return (

    <>
      <Header />
        <Hero />
        <Logosection />
        <Appfeatures />
        <Howdoesitwork />
        <Monertransfersection />
        <Testimonialssection />
        <Faqsection />
        <Subscribewrapper />
      <Footer />
    </>

  )
}

export default App
