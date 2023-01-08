import React from 'react';
import {FormStyled, ErrorMenssage} from './Form.styled'
import { Input } from '../Input/Input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from "../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Title from '../Title/Title';

const currentDate = new Date();
const yesterday = new Date(currentDate. setDate(currentDate. getDate() - 1));

const schema = yup.object({
  nome: yup.string().required("Campo Obrigatório."),
  data: yup.date().min(yesterday, 'Não é possível incluir uma data passada.').required()
}).required();

const Form = ({onChange, onSubmit, onChangeDate}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <Title tagName="h3" titleText="Novo Lembrete" icon={<FontAwesomeIcon icon={faCirclePlus} />}/>
            <Input id="nome" type="text" label="Nome:" register={register} placeholder="Nome do lembrete" onChange={onChange} />
            <ErrorMenssage>{errors.nome?.message}</ErrorMenssage>
            <Input id="data" type="date" label="Data:" register={register} onChange={onChangeDate} />
            <ErrorMenssage>{errors.data?.message}</ErrorMenssage>
            <Button type="submit" id="criar" text="Criar" onSubmit={onSubmit} icon={<FontAwesomeIcon icon={faPlus} />}/>
        </FormStyled>        
    );
};

export default Form;