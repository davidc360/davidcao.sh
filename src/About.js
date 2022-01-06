import React from 'react'
import './About.sass'

export default function () {
    return (
        <div className="aboutCtn">
            <div className="heading">About</div> 
            <p className="pp">
                I am a senior at
                <strong> Dominican University of California </strong>
                with an expected graduation date of May 2022.
                I'm studying Applied Computer Science with a strong focus on
                <strong> Data Structures & Algorithms </strong>
                and <strong> Backend Web Development</strong>
                .
                <br />
                I have a strong passion for writing scalable, clean, and reusable code
                using optimal algorithmic techniques.
                Outside of school, I enjoy competitive programing, investing in the financial markets, 
                fitness, and fiddling with mechanical keyboards.
            </p>
        </div>
    )
}