import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import './Business.css';

//#region Imports_icons
import colorSharp from "../../assets/img/new-color-sharp.png";

//#endregion Imports_icons


export const Business = () => {

  const text1 = ["Forplay House Hubs", "Immerse yourself in our unique gaming hubs designed for both players and creators. Experience a collaborative environment where innovation thrives."]
  const text2 = ["Community-Driven Gaming", "Participate in our vibrant community that powers game development, content creation, and events. Your voice matters, and your ideas shape the future of gaming."]
  const text3 = ["Decentralized Game Economy", "Discover a new way to engage with games. With our blockchain-based approach, you can own, trade, and even contribute to the games you love."]
  const text4 = ["Exclusive Events", "Engage in esports tournaments, workshops, and game launches. Connect with like-minded individuals and celebrate the gaming culture."]

  const texts = [text1, text2, text3, text4]

  return (
    <section className="business" id="business">
      <Container className="containerBusiness">
        <Row>
          <Col>
            <div className="business-bx">
              <h2> What We Offer</h2>
              <div className='textinhos'>
                {
                  texts.map((text, index) => {
                    return <TextCards text={text} key={index} />
                  })
                }
              </div>
              {/* <div className='carousel-bx'>
                <Carousel autoPlay={true} autoPlaySpeed={4000} responsive={responsive} infinite={true} className="business-slider" >
                  {
                    // logos.map((logo, index) => {
                    //   return <ImagesLogos logoName={logo} key={index} />
                    // })
                    texts.map((text, index) => {
                      return <TextCards text={text} key={index} />
                    })
                  }

                </Carousel>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" alt="bckgrimg" src={colorSharp} />
    </section>
  )
}


export const ImagesLogos = ({ logoName, className }) => {

  if (logoName.includes('firebase')) {
    className = 'firebase_logo';
  }
  else if (logoName.includes('unity')) {
    className = 'unity_logo';
  }
  else if (logoName.includes('sql')) {
    className = 'sql_logo';
  }
  else {
    className = 'item';
  }

  return (
    <div className={className}>
      <img src={logoName} alt={logoName} />
    </div>
  );
}


export const TextCards = ({ text }) => {
  return (
    <div className="contentTextCard">
      <h1 className="h1Card">{text[0]}</h1>
      <p className="pCard">{text[1]}</p>
    </div>
  );
}