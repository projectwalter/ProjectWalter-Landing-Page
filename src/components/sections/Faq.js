import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  align-self: center;
  }
  @media (max-width: 48em){
  width: 90%;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="What is Walter?" >
  Walter is a Community driven Meme Currency with Initial DEX Offering, NFT auctions and also solidifies proof-of-concept of an NFT Based in Polygon Ecosystem allowing campaigns to raise funds in an open and decentralized platform on Polygon Network.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="How many Walter NFT are there?" >
  10000.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="Are there royalties?" >
  Royalties are set at 5%, and will be collected when trading on marketplaces that enforce royalties. 
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="How can i use my Walter NFT?" >
  Whatever you can think of you can do with them. All Files are opensource.
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq