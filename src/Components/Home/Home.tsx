import React from 'react'
import { useParams } from 'react-router'
import Section from './Section'
import Slides from './Slides'

function Home() {

    return (
        <div>
            <div>
                <Slides />
            </div>
            <div>
                <Section />
            </div>
        </div>
    )
}

export default Home
