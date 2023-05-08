import react from "react";
import styled from "styled-components";
import Contact from "./components/Contact";
import Who from "./components/Who";
import Works from "./components/Works";
import Hero from "./components/Hero";

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behaviour: smooth;
    overflow-y: auto;
    color: white;
    background: url("./img/bg.jpeg");
    scrollbar-width:none;
    &::-webkit-scrollbar{display:none}
    
`

function App() {
  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
