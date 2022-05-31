import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { api } from "../../services/api";

export default function CadastrarCliente(props){

    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState(0.0);
    const [altura, setAltura] = useState(0.0);
    const [sexo, setSexo] = useState('Masculino');

    function cadastrarCliente(event){
        event.preventDefault();

        const cliente = {
            nome: nome,
            peso: peso,
            altura: altura,
            sexo: sexo,
            imc: (peso/Math.pow(altura,2)),
        }

        cadastrar(cliente);

        props.navegar("/");
    }

    async function cadastrar(cliente){
        const response = await api.post('/clientes', cliente);
        console.log(response.status);
    }

    return(
        <Form onSubmit={cadastrarCliente}>
            <FormGroup>
                <Label for="nome">Nome</Label>
                <Input id="nome" type="text" placeholder="Nome" onChange={(event) => setNome(event.target.value)}/>
                <Label for="peso">Peso</Label>
                <Input id="peso" type="number" step="0.1" placeholder="Peso" onChange={(event) => setPeso(event.target.value)}/>
                <Label for="altura">Altura</Label>
                <Input id="altura" type="number" step="0.1" placeholder="Altura" onChange={(event) => setAltura(event.target.value)}/>
                <Label for="sexo">Sexo</Label>
                <Input id="sexo" type="select" onChange={(event) => setSexo(event.target.value)}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </Input>
            </FormGroup>
            <Button color="primary">Cadastrar</Button>
        </Form>
    );

}