import React from 'react'
import Experience from './components/experience/Experience'
import Services from './components/Services/Services'
import Contactus from './components/contact/Contactus'
import Aboutus from './components/about/Aboutus'
import Portfolio from './components/profile/Portfolio'

import Head from './components/header/Head'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Aboutus />
      <Experience />
      <Portfolio />
      <Services />
      <Contactus />
      <Footer />

    </>
  );
}

export default App