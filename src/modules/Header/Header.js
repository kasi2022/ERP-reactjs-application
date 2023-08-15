import React from "react";
import { Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'; 
export default function Header(){
    return(
        <Container>
            <Nav>
                        <LinkContainer to="/home">
                                <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/user">
                                <Nav.Link>User</Nav.Link>
                        </LinkContainer>
                
            </Nav>
        </Container>
    )
}