import React from 'react';
import {InputContainer, InputStyled, LabelStyled} from './Input.styled';

export const Input = ({id, type, placeholder, register, label, onChange}) => {
    return (
        <InputContainer >
            <LabelStyled>{label}</LabelStyled>
            <InputStyled id={id} type={type} placeholder={placeholder} {...register(id)} onChange={onChange} />
        </InputContainer>
    );
};