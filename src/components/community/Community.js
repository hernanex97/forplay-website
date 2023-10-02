import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { VisionCard } from "../vision_card/VisionCard";
import colorSharp2 from "../../assets/img/new-color-sharp2.png";
import './Community.css';

export const Community = () => {

    const visions = [
        {
            title: "Comprehensive Ecosystem",
            description: "Forplay is not just another gaming platform; it's a comprehensive ecosystem that covers every aspect of the gaming journey. From discovering games to becoming a game master, Forplay offers a holistic experience.",
        }, {
            title: "Diverse Revenue Streams",
            description: "Forplay's roadmap includes multiple revenue streams. Beyond traditional gaming, we offer courses, project collaborations, funding opportunities, and influencer partnerships. This diversification minimizes risk and maximizes potential returns.",
        },
        {
            title: "Web3 Technology",
            description: "We're at the forefront of Web3 technology, which brings transparency, decentralization, and security to the gaming world. This positions Forplay as a leader in the blockchain gaming revolution.",
        },
        {
            title: "Education and Skill Development",
            description: "The inclusion of courses in our roadmap acknowledges the importance of skill development in gaming. As esports and professional gaming gain prominence, there's a growing demand for educational resources, and we're ready to meet it."
        },
        {
            title: "Growth Potential",
            description: "With a planned expansion of Forplay Houses in cities worldwide, we're tapping into the global gaming community. This physical presence complements our online platform and strengthens our brand.",
        }, {
            title: "Investor ROI",
            description: "For investors, this roadmap represents a forward-looking strategy that aligns with industry trends and user needs. It's an opportunity to be part of a platform that's shaping the future of gaming and redefining how gamers connect, learn, collaborate, and monetize their passion."
        }
    ]

    return (
        //cambiar classname para que tome bien a donde editar el CSS XDXDXD
        <section className="project" id="community">
            <Container>
                <Row>
                    <Col>
                        <h2>Why investing and getting involved
                        </h2>
                        <p>
                            In the ever-evolving landscape of the gaming industry, Forplay stands out as a visionary platform with a roadmap that paves the way for the future of gaming. Here's why investors should take note
                        </p>
                        <Row>
                            {
                                visions.map((vision, index) => {
                                    return (
                                        <VisionCard key={index} {...vision} />
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" alt="background-img" src={colorSharp2} />
        </section>
    )
}