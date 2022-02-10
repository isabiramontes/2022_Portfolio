import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
    return (
        <div className="footer">
            <footer class="py-5 bg-dark fixed-bottom">
                <Container className="navContainer" style={{ width: "100vw" }}>
                    <p class="m-0 text-center text-white">
                        &copy; 2022 Isa Biramontes. All rights reserved.
                    </p>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;