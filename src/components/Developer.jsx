import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap"; 

function Developer() {
    return (
        <div className="developer">
            <div className="scrollContent">
                <div className="parallax">
                    <Container>
                        <Row>
                            <div className="rowType2"> </div>
                        </Row>
                        <Row>
                            <Col>
                                <div className="rowType2"> </div>
                            </Col>
                        </Row>
                        <Row>
                            <div className="rowType2"> </div>
                        </Row>
                        <Row>
                            <div className="rowType2"> </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Developer;