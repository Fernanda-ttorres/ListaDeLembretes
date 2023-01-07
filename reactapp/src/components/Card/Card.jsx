import React from 'react';
import Title from  '../Title/Title'
import {CardDiv} from './Card.styled'

export const Card = ({nome}) => {
    return (
       <CardDiv>
        <Title tagName="h3" titleText={nome}/>
       </CardDiv>
    );
};