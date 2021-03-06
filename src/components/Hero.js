import React from 'react'
import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% { 
      height: 100vh ;
      }
  100% { 
      height: 90vh;
    }
`;

const TextAnimation = keyframes`
  0% { 
      opacity: 0;
      }
  100% { 
      opacity: 100;
    }
`;

const HeroImage = styled.div`
    background: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%; 
    position: relative;
    align-items: start;
    justify-items: center;
    animation: ${BounceAnimation} 3s .3s forwards cubic-bezier(0.1, 0.8, 1, 1);
`;
const HeroGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 90vh;
    grid-gap: 10px;
    place-items: end center;
    justify-items: center;
    opacity: 0;
    animation: ${TextAnimation} 3s 1.3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
`;
const HeroTitle = styled.h3`
    color: white;
    font-size: 24px;
    font-weight: 800;
    margin: 50px;
`;

const Hero = props => (
        <HeroImage image={props.image}>
            <HeroGroup>
                <HeroTitle>{props.title}</HeroTitle>
            </HeroGroup>
        </HeroImage>
    
)

export default Hero
