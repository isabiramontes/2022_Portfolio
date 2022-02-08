import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap"; 

function Home() {
    return (
        <div className="home">
            <Container>
                <Row style={{ height: "100vh" }}>
                    <div className="scrollContent">
                        <div id="introSection" className="parallax">
                            <h1 id="fullName" className="boldHeader"> Isa Biramontes</h1>
                            <h2 id="dda"> developer, designer, artist. </h2>
                        </div>
                    </div>
                </Row>
                <Row style={{ width: "200vw", height: "100vh" }}>
                    <div className="scrollContent">
                        <div className="parallax" >
                            <p> this is my main gallery </p>
                        </div>
                    </div>
                </Row> 
                <Row style={{ width: "200vw", height: "100vh" }}>
                    <div className="scrollContent">
                        <div className="parallax" >
                            <p> this is my about / contact </p>
                        </div>
                    </div>
                </Row>  
            </Container>
        </div>
        
    );
}

export default Home;