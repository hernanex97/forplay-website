import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Vision.css';

export const Vision = () => {
    return (
        <section className="vision" id="vision">
            <Container>
                <Row>
                    <Col>
                        <h2 className="visionHeader">Our Vision</h2>
                        <p className="visionText">
                            At Forplay DAO, we envision a world where gaming becomes a powerful force for collaboration, creativity, and personal growth. By combining the passion of gamers and creators with the limitless potential of blockchain, we're creating an ecosystem that empowers everyone to be a part of the gaming revolution.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}