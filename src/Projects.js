import React from 'react'
import './Projects.sass'
import ImageGallery from 'react-image-gallery';
import light from './img/light.jpg'
import light2 from './img/light2.jpg'

export default function Projects() {
    return (
        <div className="projectsCtn">
            <div className="heading">~/Projects/</div>
            <Project
                title="FastKeys.io"
                description="FastKeys.io is a full-stack type-racing web game that allows players to challenge other players on typing speed and accuracy."
                link="https://fastkeys.io"
                images={[
                    { original: light },
                    { original: light2 }
                ]}
            />
            <Project
                title="Popular Tickers"
                description="Popular Tickers is a full-stack web application that monitors retail trading interest in the stock market based on sentiment on social media platform Reddit."
                link="https://populartickers.com"
                images={[
                    { original: light },
                    { original: light2 }
                ]}
            />
        </div>
    )
}

function Project({ title, description, link, images }) {
    return (
        <div className="projectCtn">
            <div className="projectLeft">
                <span className="projectTitle">{title}</span>
                <span className="titleDivider">|</span>
                <a className="link" href={link}>{link}</a>
                <p className="projectDescription">{description}</p>
            </div>
            <div className="projectRight">
                <div className="projectGallery">
                    <div className="firstBorder">
                        <ImageGallery
                            items={images}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            autoPlay={true}
                            showThumbnails={false}
                            showNav={false}
                            />
                        <div className="secondBorder"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}