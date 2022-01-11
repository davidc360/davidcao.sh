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
                images={[
                    {
                        original: light,
                    },
                    {
                        original: light2,
                    }
                ]}
            />
        </div>
    )
}

function Project({ title, description, link, images }) {
    return (
        <div className="projectCtn">
            <div className="projectTitle">{title}</div>
            <p className="projectDesc">{description}</p>
            <ImageGallery
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                showThumbnails={false}
            />
        </div>
    )
}