import React from 'react';
import { StyledButton } from './Button.styled';


const Button = ({ text, type, id, onClick, icon }) => {
    return (
        <StyledButton type={type} id={id} onClick={onClick}>{icon} {text} </StyledButton>
    );
};

export default Button;