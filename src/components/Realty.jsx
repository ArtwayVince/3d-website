import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Estate from "./Estate" 

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Realty = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Estate />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
      Whether you're looking for a cozy apartment, 
      a spacious family home, or a luxurious estate, 
      we have the expertise and resources to make it happen.
      </Desc>
    </>
  );
};

export default Realty;
