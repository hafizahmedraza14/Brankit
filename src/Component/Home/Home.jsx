import React from 'react'
import Navbar from '../Navbar/Navbar'
import Section1 from '../Section-1/Section1'
import Leaders from '../Leaders/Leaders'
import Brands from '../Brands/Brands'
import Slide from '../Slide/Slide'
import Stocks from '../Stocks/Stocks'
import Stories from '../Stories/Stories'
import Process from '../Process/Process'
import Clients from '../Clients/Clients'
import Solutions from '../Solutions/Solutions'
import Success from '../Success/Success'
import Subscribe from '../Subscribe/Subscribe'
import Partners from '../Partners/Partners'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <div>
        <>
            <Navbar />
            <Section1 />
            <Leaders />
            <Brands />
            <Slide />
            <Stocks />
            <Stories />
            <Process />
            <Clients />
            <Solutions />
            <Success />
            <Subscribe />
            <Partners />
            <Footer />
        </>
    </div>
  )
}

export default Home
