// import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import { Row, Col, Container } from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
// import saturn from '../assets/saturn.png';
import './Banner.css';


function Banner() {

  return (
    <section className='banner section' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7} style={{ marginTop: "100px" }}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                <h1>{"Hi, I'm Mashal"} <Typewriter
                options={{
                    strings: ['Web developer',"Web designer", "Python programmer", "ML enthusiast"],
                    autoStart: true,
                    loop: true,
                }}/>
                </h1>
                    <p>I am passionate about frontend design, creating visually appealing interfaces that blend aesthetics with functionality. Additionally, I have a keen interest in machine learning and enjoy applying its algorithms to develop intelligent systems.</p>
                    <button className="vvd" onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle sixe={25}/></button>
                </Col>
                {/* <Col xs={12} md={6} xl={5}>
                    <img src={saturn} alt="saturn" style={{width:"30vw"}} className="animated-saturn"/>
                </Col> */}
            </Row>
        </Container>

    </section>
  )
}

export default Banner