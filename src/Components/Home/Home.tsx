import React from 'react'
import { useParams } from 'react-router'
import Footer from './Footer'
import Section from './Section'
import Slides from './Slides'

function Home() {

    return (
        <div className="bg-light">
                <Slides />
                <Section />
                <Footer />
        </div>
    )
}

export default Home
