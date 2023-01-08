import React from 'react'
import { StyledH2, StyledH3, StyledH4 } from './Title.styled'

const Title = ({ tagName, titleText, icon }) => {
    switch (tagName) {
        case "h2":
            return <StyledH2>{icon} {titleText}</StyledH2>
        case "h3":
            return <StyledH3>{icon} {titleText}</StyledH3>
        case "h4":
            return <StyledH4>{icon} {titleText}</StyledH4>
        
    }
}

export default Title;