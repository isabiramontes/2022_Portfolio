import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap"; 

function Artist() {
    return (
        <div className="artist">
            <div className="scrollContent">
                <div className="parallax">
                    <Container>
                        <Row>
                            <Col sm={7} md={7} lg={7}> this is a col</Col>
                            <Col sm={5} md={5} lg={5}> this is also a col</Col>
                        </Row>
                        <Row>
                            <Col sm={7} md={7} lg={7}> this is a col</Col>
                            <Col sm={5} md={5} lg={5}> this is also a col</Col>
                        </Row>
                        <Row>
                            <Col sm={7} md={7} lg={7}> this is a col</Col>
                            <Col sm={5} md={5} lg={5}> this is also a col</Col>
                        </Row>
                        <Row>
                            <Col sm={7} md={7} lg={7}> this is a col</Col>
                            <Col sm={5} md={5} lg={5}> this is also a col</Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Artist;