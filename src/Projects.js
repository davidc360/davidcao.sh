import React from 'react'
import './Projects.sass'
import ImageGallery from 'react-image-gallery';
import light from './img/light.jpg'
import light2 from './img/light2.jpg'

export default function Projects() {
    return (
        <div className="projectsCtn">
            <div className="heading">~/Projects/</div>
            {projects}
            <div className="loadMore">Load More</div>
        </div>
    )
}

function Project({ title, description, link, images }) {
    return (
        <div className="projectCtn">
            <div className="projectLeft">
                <span className="projectTitle">{title}</span>
                <span className="titleDivider">|</span>
                <a className="link" href={link} target="_blank">{link}</a>
                <div className="projectDescription">{description}</div>
            </div>
            {images &&
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
                                slideInterval={2000 + Math.random() * 2000}
                            />
                            <div className="secondBorder"></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

const projects = [
    <Project
        title="FastKeys.io"
        key="FastKeys.io"
        description={(
            <>
            <p>
                FastKeys.io is a full-stack type-racing web game that allows players to challenge other players on typing speed and accuracy.
            </p>
            <br />
            <p>
                The game is built with React and Redux on the front end styled with SASS, and
                a Flask backend with a MongoDB database.
            </p>
            <br />
            <p> Here's a demo of me challenging you to type 70wpm: </p>
            <a href="https://fastkeys.io/game/b704bd02" target="_blank">https://fastkeys.io/game/b704bd02</a>
            <br />
            <p> And my personal record if you're up for the challenge:</p>
            <a href="https://fastkeys.io/game/5afd9f9b" target="_blank">https://fastkeys.io/game/5afd9f9b</a>
            </>
        )}
        link="https://fastkeys.io"
        images={[
            { original: light },
            { original: light2 }
        ]}
    />
    ,
    <Project
        title="Popular Tickers"
        key="Popular Tickers"
        description={(
            <>
            <p> Popular Tickers is a full-stack web application that monitors retail trading interest in the stock market based on sentiment on social media platform Reddit. </p>
            <br />
            <p>
                This site leverages Reddit's API and delivers real time content via Websockets as they are posted.
            </p>
            <br />
            <p>
                The content then gets analyzed with natural language processing library Textblob and the sentiment around
                    a stock ticker is calculated and displayed on the site.
            </p>
            </>
        )}
        link="https://populartickers.com"
        images={[
            { original: light },
            { original: light2 }
        ]}
    />
    ,
    <Project
        title="5moves.xyz"
        key="5moves.xyz"
        description={(
            <>
            <p>
                    I designed a Tic Tac Toe style game with alternative rules where players pre-select 5 moves
                    in advance and create a sharable link to challenge others.
            </p>
            <br />
            <p>
                The game is animated with SASS/CSS and uses the React structure on the front end.
                The backend runs a Flask server with a MongoDB database to hold all the games.
            </p>
            <br />
            <p>Demo game:</p>
            <a href="https://5moves.xyz/game/01da092a" target="_blank">https://5moves.xyz/game/01da092a</a>
            </>
        )}
        link="https://5moves.xyz"
        images={[
            { original: light },
            { original: light2 }
        ]}
    />
    ,
    <Project
        title="Tech Prep"
        key="Tech Prep"
        description={(
            <>
            <p>
                Tech Prep is a full-fledged forum that allows users to create
                and comment on posts related to technical interview preparation.
            </p>
            <br />
            <p>
                The forum is built with Flask, SQL and Jinja2 for templating and has a login system.
            </p>
            </>
        )}
        link="https://tech-prep.herokuapp.com"
        images={[
            { original: light },
            { original: light2 }
        ]}
    />
    ,
    <Project
        title="Slash to Search"
        key="Slash to Search"
        link="https://davidcao.sh/slash-to-search/"
        description={(
            <>
            <p>
                Slash to Search is a full-stack web application that allows users to search for
                a specific movie or TV show and then view the results.
            </p>
            <br />
            </>
        )}
    />
                    
]