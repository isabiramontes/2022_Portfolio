import React from "react";
import { Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css"

function Navigation() {
    return (
        <div className="navigation" style={{ width: "100vw" }}>
            <Container className="navContainer">
                <Nav className="d-flex justify-content-between" activeKey="/home">
                    <Nav.Item>
                        <NavLink className="nav-link" to="/home" style={{ color: "#DDE41A" }}> home </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/developer" style={{ color: "#DDE41A" }}> developer </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/designer" style={{ color: "#DDE41A" }}> designer </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/artist" style={{ color: "#DDE41A" }}> artist </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/home/#aboutSection" style={{ color: "#DDE41A" }}> about / contact </NavLink>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    );
}

export default Navigation;