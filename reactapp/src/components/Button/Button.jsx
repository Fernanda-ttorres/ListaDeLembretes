import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ text, type, id }) => {
    return (
        <StyledButton type={type} id={id}> {text} </StyledButton>
    );
};

export default Button;