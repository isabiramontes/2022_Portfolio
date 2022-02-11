import React from "react";
import "../App.css";
import { Container, Row, Col, Button } from "react-bootstrap"; 


function Desginer() {
    return (
        <div className="designer">
            <div className="scrollContent">
                <div className="parallax">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <Button className="btn btn-outline-black waves-effect filter" data-rel="all"> All</Button>
                                <Button className="btn btn-outline-black waves-effect filter" data-rel="1"> Mountains</Button>
                                <Button className="btn btn-outline-black waves-effect filter" data-rel="2"> Sea</Button>
                            </Col>
                        </Row>
                        <div className="gallery" id="designGallery">
                            <Col> 
                                <div className="mb-3 pics animation all 2">
                                    <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" alt="Card image cap"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3 pics animation all 1">
                                    <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.webp" alt="Card image cap"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3 pics animation all 1">
                                    <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.webp" alt="Card image cap"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3 pics animation all 2">
                                    <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).webp" alt="Card image cap"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3 pics animation all 2">
                                    <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).webp" alt="Card image cap"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="mb-3 pics animation all 1">
                                    <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.webp" alt="Card image cap"/>
                                </div>
                            </Col>
                        </div>  
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Desginer;