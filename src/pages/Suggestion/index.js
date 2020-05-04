import React from 'react';
import { Form } from "@unform/web";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";

import "../../styles.css"

import api from '../../Service/ApiService'

const App = () => {

    async function handleSubmit(data, { reset }) {
        try {
            await api.post('suggestion', data, {
                headers: {
                    // Authorization: user,
                }
            });
            alert('Sugestão Cadastrada!');
            // history.push('/list');
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente');
        }
        reset();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <img
                src="https://image.flaticon.com/icons/svg/2654/2654500.svg"
                height="150"
                width="175"
                alt="Unform"
            />
            <Input name="title" label="Titulo" />
            <TextArea name="description" label="Comentario" style={{ height: "300px" }} />



            <button type="submit">Salvar</button>
        </Form>
    );
}

export default App;