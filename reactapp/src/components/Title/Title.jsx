import React from 'react'
import { StyledH2, StyledH3, StyledH4, StyledH5 } from './Title.styled'

const Title = ({ tagName, titleText, icon }) => {
    switch (tagName) {
        case "h2":
            return <StyledH2>{icon} {titleText}</StyledH2>
        case "h3":
            return <StyledH3>{icon} {titleText}</StyledH3>
        case "h4":
            return <StyledH4>{icon} {titleText}</StyledH4>
        case "h5":
            return <StyledH5>{icon} {titleText}</StyledH5>
    }
}

export default Title;