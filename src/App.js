import React from "react";
import { Scope } from "@unform/core";
import { Form } from "@unform/web";
import Input from "./components/Input";
import "./styles.css"

export default function App() {
  function handleSubmit(data, { reset }) {
    console.log(data);

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

        <Input name="titulo" label="Titulo" />
        <Input name="comentario" label="Comentario" style={{ height: "300px" }} />
        <input type="file" />



        <button type="submit">Salvar</button>
      </Form>
  );
}
