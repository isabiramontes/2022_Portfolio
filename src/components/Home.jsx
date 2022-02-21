import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap"; 
import AboutContact from "./AboutContact";

targetRef = React.createRef();

export default class Home extends Component {
    componentDidMount = () => {
        if (this.props.location.state) {
            this.scrollToTarget()
        }
    }

    scrollToTarget = () => {
        setTimeout(() => {
            this.targetRef.scrollIntoView({
                behavior: 'smooth'
            })
        }, 500);
    }

    render() {
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
            <Banner scrollToTarget={this.scrollToTarget} />
            <div ref={ref => { this.targetRef = ref }}>
                <AboutContact />
            </div>
            
        </div>  
        )
    }
}