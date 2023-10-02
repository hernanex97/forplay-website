import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { TypeAnimation } from 'react-type-animation';
import headderImg from "../../assets/img/new-logoforplay-2.png";

import './Banner.css';

export const Banner = () => {

    return (
        <section className="banner" id="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            <h1>{"Hello. "}</h1>
                            <h1>Welcome to Forplay DAO</h1>
                            <TypeAnimation
                                sequence={[
                                    '>.. Community Forplay',
                                    2000, // Waits 1s
                                    '>.. Education Forplay',
                                    2000, // Waits 2s
                                    '>.. Business Forplay',
                                    2000,
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                deletionSpeed={50}
                            />
                            <p style={{ fontStyle: 'italic' }}> Unleash the Power of Gaming and Collaboration</p>
                            <br></br>
                            <p><b>Forplay DAO</b> is an innovative <b>ecosystem</b> that brings together gamers, creators, and enthusiasts under one roof. We are redefining the gaming experience through <b>decentralized collaboration and interactive engagement.</b> Join us on this thrilling journey where gaming meets cutting-edge blockchain technology.</p>
                            <button onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '#connect';
                            }}>Let's connect <ArrowRightCircle size={25} /></button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="headderImg" src={headderImg} alt="header-img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}