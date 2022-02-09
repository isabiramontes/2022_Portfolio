import React from "react";
import "../App.css";
import { Container, Row, Col, Form } from "react-bootstrap"; 

function Home() {
    return (
        <div className="home">
            <div id="introSection" style={{ height: "100vh" }}>
                <div classsName="parallax">
                    <h1 id="fullName" className="boldHeader"> Isa Biramontes</h1>
                    <h2 id="dda"> developer, designer, artist. </h2>
                </div>
            </div>
            <div id="gallerySection" style={{ width: "100vw", height: "250vh" }}>
                <div className="scrollContent">
                    <div className="parallax">
                        <Container> 
                            <Row style={{ marginLeft: "4vw", marginRight: "4vw", marginBottom: "6vh"}}> 
                                <Col className="wideImgCol" sm={7} md={7} lg={7}> 
                                    <div className="wideImgTop"/>
                                    <div className="wideImgBottom"/>
                                </Col>
                                <Col className="narrowImgCol" sm={5} md={5} lg={5}> 
                                    <div className="narrowImg"/>
                                </Col>
                            </Row>
                            <Row style={{ marginLeft: "4vw", marginRight: "4vw", marginBottom: "6vh" }}>
                                <Col className="singleImgCol" sm={12} md={12} lg={12}>
                                    <div className="singleImg"/> 
                                </Col>
                            </Row>
                            <Row style={{ marginLeft: "4vw", marginRight: "4vw", marginBottom: "6vh" }}>
                                <Col className="narrowImgCol" sm={5} md={5} lg={5}>
                                    <div className="narrowImg2" />
                                </Col>
                                <Col className="wideImgCol" sm={7} md={7} lg={7}>
                                    <div className="wideImgTop" />
                                    <div className="wideImgBottom" />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
            <div id="aboutContactSection" style={{ width: "100vw", height: "250vh" }}>
                <div className="scrollContent">
                    <div className="parallax" >
                        <Container>
                            <Row style={{ marginLeft: "4vw", marginRight: "4vw", marginBottom: "6vh" }}>
                                <Col className="narrowImgCol" sm={5} md={5} lg={5}>
                                    <div id="aboutImg" className="narrowImg2" />
                                    <p>
                                        Isa Biramontes is Lorem ipsum dolor sit amet.

                                        Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices.

                                        A cras semper auctor neque vitae. Cursus risus at ultrices mi tempus imperdiet nulla. 
                                    </p>
                                </Col>
                                <Col className="wideImgCol" sm={7} md={7} lg={7}>
                                    <h3> Name</h3>
                                    
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Example textarea</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                    <div className="wideImgBottom" />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Home;