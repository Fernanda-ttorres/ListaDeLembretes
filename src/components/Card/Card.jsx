import React from 'react';
import Title from  '../Title/Title'
import {CardDiv} from './Card.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Card = ({nome, onClick}) => {
    return (
       <CardDiv>
        <Title tagName="h4" titleText={nome} />
        <button onClick={onClick} ><FontAwesomeIcon icon={faTrash} /></button>
       </CardDiv>
    );
};