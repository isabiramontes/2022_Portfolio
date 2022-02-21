import React from "react";
import { Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css"

export default class Navigation extends React.Component {

    handleScroll = () => {
        if (this.props.scrollToTarget) {
            this.props.scrollToTarget()
        }
    }

    
    

    render() {

        return (
            <div className='navigation' onClick={this.handleScroll} style={{ width: "100vw" }}>
                    <Container className="navContainer" >
                        <Nav className="d-flex justify-content-between bg-transparent" activeKey="/home">
                            <Nav.Item>
                                <Link className="nav-link" to="/home" style={{ color: "#DDE41A" }}> home </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/developer" style={{ color: "#DDE41A" }}> developer </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/designer" style={{ color: "#DDE41A" }}> designer </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/artist" style={{ color: "#DDE41A" }}> artist </Link>
                            </Nav.Item>
                        <div className='banner' onClick={this.handleScroll} >
                            <Nav.Item>
                                <Link className='test-link' to={{
                                    pathname: '/home',
                                    state: {
                                        fromBanner: true
                                    }
                                }}
                                >
                                    about / contact
                                </Link>
                            </Nav.Item>
                        </div>
                        </Nav>
                    </Container>
                </div>
        )
    }
}