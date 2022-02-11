import React, { Component } from 'react';
import "../App.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap"; 
import $ from 'jquery'


export default class Artist extends Component {
    jQuerycode = () => {
        var selectedClass = "";
        $(".filter").click(function () {
            selectedClass = $(this).attr("data-rel");
            $("#designGallery").fadeTo(100, 0.1);
            $("designGallery").not("." + selectedClass).fadeOut().removeClass('animation');
            setTimeout(function () {
                $("." + selectedClass).fadeIn().addClass('animation');
                $("#gallery").fadeTo(300, 1);
            }, 300);
        });
        $(".button").click(function () {
            $('p').css('color', 'red')

        });
        
    }
    componentDidMount() {
        this.jQuerycode()
    }
    render() {
        return (
            <div className="designer">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci vel voluptates sit voluptas illum eveniet consectetur corrupti suscipit nesciunt et, inventore velit quaerat ex deleniti ut facere, voluptate ab? Ducimus.</p>
                    <button className="button">Click here</button>
                </div>
                <div className="scrollContent">
                    <div className="parallax">
                        <Container>
                            <a href="first_gallery/1.jpg" title="Image 1" data-rel="first_gallery"><img src="images/1_thumbnail.jpg" alt="Image 1 Thumbnail" /></a>

                            <a href="second_gallery/2.jpg" title="Image 2" data-rel="second_gallery">
                                <img src="images/2_thumbnail.jpg" alt="Image 2 Thumbnail" />
                            </a>
                            <Row>
                                <Col>
                                    
                                    <a data-rel="all">
                                        <Button className="filter"> All</Button>
                                    </a>
                                    <a data-rel="1">
                                        <Button className="filter"> Mountains</Button>
                                    </a>
                                    <a data-rel="2">
                                        <Button className="filter"> Sea </Button>
                                    </a>
                                </Col>
                            </Row>
                            <div className="gallery" id="designGallery">
                                <Col>
                                    <div className="mb-3 pics animation all 2" >
                                        <Image className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" alt="image1" />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 pics animation all 1">
                                        <Image className="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.webp" alt="image2" />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 pics animation all 1">
                                        <Image className="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.webp" alt="image3" />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 pics animation all 2">
                                        <Image className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).webp" alt="image4" />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 pics animation all 2">
                                        <Image className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).webp" alt="image5" />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3 pics animation all 1">
                                        <Image className="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.webp" alt="image6" />
                                    </div>
                                </Col>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        ) 
    }
}