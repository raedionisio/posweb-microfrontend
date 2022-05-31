import React from "react";
import { Container } from "reactstrap";
import ListarClientes from "../ListarClientes";

export function App(){
    return(
        <Container>
            <ListarClientes />
        </Container>
    );
}