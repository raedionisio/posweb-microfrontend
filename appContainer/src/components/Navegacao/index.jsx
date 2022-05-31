import React, { Suspense } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

const ListarClientesApp = React.lazy(() => import('listar/ListarClientesApp'));
const CadastrarClienteApp = React.lazy(() => import('cadastrar/CadastrarClienteApp'));
const PegarClienteApp = React.lazy(() => import('pegar/PegarClienteApp'))

export function Navegacao(){
    const navegacao = useNavigate();
    const url = useLocation();

    return(
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <ListarClientesApp />
                </Suspense>
            }/>
            <Route path="/pegarcliente/:id" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <PegarClienteApp navegar={navegacao} url={url}/>
                </Suspense>
            }/>

            <Route path="/cadastrar" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <CadastrarClienteApp navegar={navegacao}/>
                </Suspense>
            }/>
        </Routes>
    );
}