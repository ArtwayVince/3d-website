import React,{ Suspense }from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import "../heroSpinner.css";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1000px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 28px;

  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #add8e6;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 28px;

  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    font-size: 12px;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;



const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 30%;
    top:-280px;
    justify-content: center;
  }
`;
const Img = styled.img`
  width: 700px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateX(30px);
    }
  }
`;



const Hero = () => {
  return (
    <>
    <Navbar />
    <Section>
      <Container>
      <Left>
          <Title>Welcome to <span style={{color:'#add8e6'}}>Qlub365</span></Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
            we are a comunity of friends doing business for profit
            and giving back to society.
          </Desc>
          <Button>Learn More</Button>
        </Left>

      <Right>  
     <div className ="box">
     <span style = {{"--i":2}}><img src="./img/helpPeople.png"/></span>
     <span style = {{"--i":1}}><img src="./img/fixT1.jpg"/></span>
     <span style = {{"--i":3}}><img src="./img/logo1.png"/></span>
     <span style = {{"--i":4}}><img src="./img/people.png"/></span>
     <span style = {{"--i":5}}><img src="./img/Tp1.jpg"/></span>
     <span style = {{"--i":6}}><img src="./img/homes.jpg"/></span>
     <span style = {{"--i":7}}><img src="./img/kefianoHQU.png"/></span>
     <span style = {{"--i":8}}><img src="./img/cbt.jpg"/></span>
     <img src= "./img/logo_removeBg.png"style = {{height:'150px', width:'150px'}}>
       </img>
    </div>
    </Right>
    </Container>
    </Section>
    </>
  )
}

export default Hero
