import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "reactstrap";
import "./index.css";

export function NavBar(){
    return(
        <Navbar color="dark" dark expand="md">
            <Nav>
                <NavItem>
                    <Link className="nav-item" to="/">Listar</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-item" to="/pegarcliente">Pegar um único ID</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-item" to="/cadastrar">Cadastrar</Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
}