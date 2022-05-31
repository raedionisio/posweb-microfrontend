import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { api } from "../../services/api";

export default function ListarClientes(){

    const [clientes, setClientes] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        const response = await api.get('/clientes');
        setClientes(response.data);
    }

    return(
        <Table striped bordered>
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Peso</th>
                    <th scope="col">Altura</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">IMC</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map(cliente => {
                    return(
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.peso}</td>
                            <td>{cliente.altura}</td>
                            <td>{cliente.sexo}</td>
                            <td>{cliente.imc.toFixed(2)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}