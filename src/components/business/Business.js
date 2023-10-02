import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import './Business.css';

//#region Imports_icons
import csharp_ico from "programming-languages-logos/src/csharp/csharp_512x512.png"
import python_ico from "programming-languages-logos/src/python/python_512x512.png"
import javascript_ico from "programming-languages-logos/src/javascript/javascript_512x512.png"
import css_ico from "../../assets/img/css_logo.png"
import html_ico from "../../assets/img/html_white_512x512.png"
import flutter_ico from "../../assets/img/flutter_2.png"
import docker_ico from "../../assets/img/docker.png"
import k8s_ico from "../../assets/img/k8s.png"
import unity_ico from "../../assets/img/unity_logo_512x512.png"
import firebase_logo from "../../assets/img/firebase_logo2.png"
import sql_logo from "../../assets/img/sql_logo.png"
import colorSharp from "../../assets/img/new-color-sharp.png";

//#endregion Imports_icons


export const Business = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const logos = [csharp_ico, python_ico, javascript_ico, css_ico, html_ico,
    flutter_ico, docker_ico, k8s_ico, unity_ico, firebase_logo, sql_logo]


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