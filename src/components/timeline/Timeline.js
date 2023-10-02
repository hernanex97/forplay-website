import React from "react"
import { Chrono } from "react-chrono";
import './Timeline.css';
import { Row, Col, Container } from "react-bootstrap";
export const Timeline = () => {
    const items = [{
        title: "2024 - Q1",
        cardTitle: "Find Games",
        cardSubtitle: "Explore a curated selection of video games and board games tailored to your preferences through personalized recommendations.",
        // cardDetailedText: "details",
        // media: {
        //     type: "IMAGE",
        //     source: {
        //         url: "http://someurl/image.jpg"
        //     }
        // }
    },
    {
        title: "2024 - Q2",
        cardTitle: "Find Teams",
        cardSubtitle: "Start by connecting with like-minded players and forming your dream gaming team. Explore a world of possibilities as you team up with fellow gamers.",
        // media: {
        //     type: "IMAGE",
        //     source: {
        //         url: "http://someurl/image.jpg"
        //     }
        // }
    },
    {
        title: "2024 - Q3",
        cardTitle: "Find Your Community",
        cardSubtitle: "Whether you're a solo gamer or looking to make new friends, our Forplay Houses in cities worldwide provide a space to connect, play, and socialize.",
        // media: {
        //     type: "IMAGE",
        //     source: {
        //         url: "http://someurl/image.jpg"
        //     }
        // }
    },
    {
        title: "2024 - Q4",
        cardTitle: "Find Courses",
        cardSubtitle: "Enhance your skills and knowledge with a variety of courses designed to help you become a pro in gaming/development/streaming. Learn from experts and level up your game.",
        // media: {
        //     type: "IMAGE",
        //     source: {
        //         url: "http://someurl/image.jpg"
        //     }
        // }
    },
    {
        title: "2025 - Q1",
        cardTitle: "Find Fellow Developers",
        cardSubtitle: "Ready to take your gaming idea to the next level? Discover talented developers within our community who can turn your vision into reality.",
        // media: {
        //     type: "IMAGE",
        //     source: {
        //         url: "http://someurl/image.jpg"
        //     }
        // }
    },
    {
        title: "2025 - Q2",
        cardTitle: "Find Projects",
        cardSubtitle: "Dive into a marketplace of gaming projects seeking passionate collaborators. Browse through projects, join the ones that excite you, and contribute your skills.",
        // media: {
        //     type: "IMAGE",
        //     source: {
        //         url: "http://someurl/image.jpg"
        //     }
        // }
    },
    {
        title: "2025 - Q3",
        cardTitle: "Get Funding",
        cardSubtitle: "Need financial support for your gaming project? Explore funding opportunities within our ecosystem, including grants and crowdfunding campaigns.",
        // media: {
        //     type: "IMAGE",
        //     source: {
        //         url: "http://someurl/image.jpg"
        //     }
        // }
    }, {
        title: "2025 - Q4",
        cardTitle: "Find Influencers",
        cardSubtitle: "Connect with influencers who can help promote your game to a wider audience. Our network of influencers is here to amplify your reach.",
        // media: {
        //     type: "IMAGE",
        //     source: {
        //         url: "http://someurl/image.jpg"
        //     }
        // }
    }];

    return (
        <section className="roadmap" id="roadmap">
            <Container className="timeline-item">
                <Row>
                    <h2>Our Roadmap</h2>
                    <Col>
                        <Row>
                            <div className="timeline-item-content">
                                <Chrono items={items} hideControls="True" mode="HORIZONTAL" scrollable={{ scrollbar: true }} />
                            </div>
                            {/* <img className="background-image-right-2" alt="background-img" src={colorSharp2} /> */}

                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
    // return (
    //     <div className="chronoTimeline">
    //         <Chrono items={items} />
    //     </div >
    // )
}