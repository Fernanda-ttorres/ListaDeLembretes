import React from 'react'
import { StyledH2, StyledH3, StyledH4, StyledH5 } from './Title.styled'

const Title = ({ tagName, titleText }) => {
    switch (tagName) {
        case "h2":
            return <StyledH2>{titleText}</StyledH2>
        case "h3":
            return <StyledH3>{titleText}</StyledH3>
        case "h4":
            return <StyledH4>{titleText}</StyledH4>
        case "h5":
            return <StyledH5>{titleText}</StyledH5>
    }
}

export default Title;