import React, { useState, useEffect, useRef } from 'react'
import './Greeting.sass'

const THINGS_I_DO = [
    "build full stack web apps.",
    "love writing code with Vim.",
    "love hashmaps.",
    "love linked lists.",
    "love binary trees.",
    "build sites with React.",
    "love Redux.",
]

export default function Greeting({ showSubText }) {
    const [subText, setSubText] = useState("")
    const [subTextChoice, setSubtextChoice] = useState(0)
    const subTextRef = useRef(subText)
    const decrementInterval = useRef(null)
    const incrementInterval = useRef(null)
    const SUBTEXT_DISPLAY_TIME = Math.max(THINGS_I_DO[subTextChoice].length * 50, 1100)
    const seen_greetings = useRef(new Set([0]))

    function setRandomSubText() {
        let randomChoice = Math.floor(Math.random() * THINGS_I_DO.length)
        // ensure we don't get the same thing twice in a row
        while (randomChoice == subTextChoice || seen_greetings.current.has(randomChoice)) {
            randomChoice = Math.floor(Math.random() * THINGS_I_DO.length)
        }
        setSubtextChoice(randomChoice)
        if (seen_greetings.current.size == THINGS_I_DO.length - 1) {
            seen_greetings.current = new Set([randomChoice])
        } else {
            seen_greetings.current.add(randomChoice)
        }
    }

    function decrementSubText() {
        // if text became empty
        if (subTextRef.current.length === 0) {
            clearInterval(decrementInterval.current)
            setTimeout(setRandomSubText, 200)
        } else {
            // else decrement text
            setSubText(text => {
                const newText = text.slice(0, -1)
                subTextRef.current = newText
                return newText
            })
        }
    }
    
    function incrementSubText() {
        // if text fully typed out
        if (subTextRef.current.length === THINGS_I_DO[subTextChoice].length) {
            // stop incrementing and start decrementing
            clearInterval(incrementInterval.current)
            setTimeout(startDecrement, SUBTEXT_DISPLAY_TIME)
        } else {
            // else add letter to text
            setSubText(text => {
                const targetText = THINGS_I_DO[subTextChoice]
                const newText = targetText.slice(0, text.length + 1)
                subTextRef.current = newText
                return newText
            })
        }
    }

    function startDecrement() {
        clearInterval(decrementInterval.current)
        decrementInterval.current = setInterval(decrementSubText, Math.min(1100/subTextRef.current.length, 70))
    }

    function startIncrement() {
        clearInterval(incrementInterval.current)
        incrementInterval.current = setInterval(incrementSubText, Math.min(1100/THINGS_I_DO[subTextChoice].length, 50))
    }

    useEffect(() => {
        // stop decrementing and start incrementing
        clearInterval(decrementInterval.current)
        startIncrement()
    }, [subTextChoice])


    return (
        <div className="greetingCtn">
            <div className="introText">Hello, I'm David Cao.</div>
            { showSubText &&
                <div className="subCtn">
                    <span>I </span>  
                    <span className="subText">{subText}</span>
                </div>
            }
        </div>
    )
}