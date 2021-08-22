import React from 'react'
import styled from 'styled-components'
import PhonesImg from '../assets/illustration-phones.svg'
import BackImg from '../assets/bg-pattern-circles.svg'
import './MiddleSection.css';

const Container = styled.section`
  padding: 80px 60px;
  background-image: url(${BackImg});
  display: block;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: left;
  background-color: hsl(237, 23%, 32%);
  border-top-right-radius: 150px;
  border-bottom-left-radius: 150px;
  max-height: 410px;

  @media (max-width: 375px) {
    padding: 60px 40px;
    background-image: url(${BackImg});
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-color: hsl(237, 23%, 32%);
    margin-top: 585px;
    max-height: 585px;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

const Image = styled.div`
  position: relative;
  height: 470px;
  top: -140px;

  @media (max-width: 375px) {
    position: relative;
    height: 80px;
    top: -250px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  margin-top: 50px;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 375px) {
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 14px;
  color: #fff;
  line-height: 30px;

  @media (max-width: 375px) {
    text-align: center;
    width: 283px;
  }
`;
  
const MiddleSection = () => {
  return (
    <Container>
      <Wrap> 
        <Column>
          <Image >
            <img className="PhonesImage" src={PhonesImg} alt="PhoneImg" />
          </Image>
        </Column>
        <Column>
          <Title>State of the Art Infrastructure</Title>
          <Desc >
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </Desc>
        </Column> 
      </Wrap>
    </Container>
  )
}

export default MiddleSection;