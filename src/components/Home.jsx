import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap"; 

function Home() {
    return (
        <div className="home">
            <div id="introSection" style={{ height: "100vh" }}>
                <div className="parallax">
                    <h1 id="fullName" className="boldHeader"> Isa Biramontes</h1>
                    <h2 id="dda"> developer, designer, artist. </h2>
                </div>
            </div>
            <div id="gallerySection" style={{ width: "100vw", height: "200vh" }}>
                <div className="scrollContent">
                    <div className="parallax">
                        <Container> 
                            <Row> 
                                <Col sm={7} md={7} lg={7}> this is a col</Col>
                                <Col sm={5} md={5} lg={5}> this is also a col</Col>
                            </Row>
                            <Row> 
                                <Col>
                                    <div className="rowType2"> </div>
                                </Col> 
                            </Row>
                            <Row>
                                <Col sm={7} md={7} lg={7}> this is a col</Col>
                                <Col sm={5} md={5} lg={5}> this is also a col</Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
            <div id="aboutContactSection" style={{ width: "100vw", height: "200vh" }}>
                <div className="scrollContent">
                    <div className="parallax" >
                        <Row>
                            <Col>
                                <p> this is my about / contact </p>
                            </Col>
                            <Col>
                                <p> this is my about / contact </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Home;