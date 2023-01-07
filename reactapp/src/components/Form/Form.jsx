import React from 'react';
import {FormStyled, ErrorMenssage} from './Form.styled'
import { Input } from '../Input/Input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from "../Button/Button";

const currentDate = new Date();
const yesterday = new Date(currentDate. setDate(currentDate. getDate() - 1));

const schema = yup.object({
  nome: yup.string().required("Campo Obrigatório."),
  data: yup.date().min(yesterday, 'Não é possível incluir uma data passada.').required()
}).required();

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = data => console.log(data);

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <Input id="nome" type="text" label="Nome:" register={register} placeholder="Nome do lembrete"/>
            <ErrorMenssage>{errors.nome?.message}</ErrorMenssage>
            <Input id="data" type="date" label="Data:" register={register} />
            <ErrorMenssage>{errors.data?.message}</ErrorMenssage>
            <Button type="submit" id="criar" text="Criar"/>
        </FormStyled>        
    );
};

export default Form;