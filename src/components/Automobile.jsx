import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Ferrari from "./Ferrari";

const Desc = styled.div`
  width: 200px;
  height: 135px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Automobile = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Ferrari/>
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
      we have a team of automobile dealers and experts who are 
      dedicated to providing our clients with top-quality 
      vehicles. Whether you are in the market for a new or used car,
      truck, or SUV, our team has the expertise and connections to supply 
      you with any vehicle you desire
      </Desc>
    </>
  );
};

export default Automobile;
