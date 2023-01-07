import React from 'react';
import {InputContainer, InputStyled, LabelStyled} from './Input.styled';

export const Input = ({id, type, placeholder, register, label}) => {
    return (
        <InputContainer >
            <LabelStyled>{label}</LabelStyled>
            <InputStyled id={id} type={type} placeholder={placeholder} {...register(id)}/>
        </InputContainer>
    );
};