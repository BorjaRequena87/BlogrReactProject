import React from 'react'
import styled from 'styled-components'
import BgImg from '../assets/bg-pattern-intro.svg'

const Section = styled.section`
  background-image: url(${BgImg});
  height: 600px;
  display: block;
  background-repeat: no-repeat;
  background-size: auto;
  background-color: hsl(13, 100%, 72%);
  background-position: center;
  border-bottom-left-radius: 150px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 90%;
  text-align: center;
  padding: 30px;
`;

const Title = styled.p`
  font-size: 55px;
  color: #fff;
  font-weight: 400;
`;

const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #fff;
  line-height: 30px;
  margin-top: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: 58px;
  width: 150px;
  height: 50px;
  line-height: 71px;
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: hsl(353, 100%, 62%);
  text-decoration: none;
  margin: 60px 5px 0px;
  &:hover {
    color: hsl(353, 100%, 62%);
    background: #fff;
    transition: 200ms ease-in;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Title>
          A modern publishing platform
        </Title>
        <Desc>
          Grow your audience and build your online brand
        </Desc>
        <ButtonContainer >
            <Button href="https://www.blogger.com/about/?bpli=1" target="_blank">
              <span>Start for free</span>
            </Button>
            <Button href="https://www.blogger.com/about/?bpli=1" target="_blank">
              <span>Learn more</span>
            </Button>
          </ButtonContainer>
      </Content>
    </Section>
  )
}

export default Hero;
