import React from 'react'
import styled from 'styled-components'
import SecondSectionImgDesktop from '../assets/illustration-laptop-desktop.svg'
import SecondSectionImgMobile from '../assets/illustration-laptop-mobile.svg'

const Section = styled.section`
  background-image: url(${SecondSectionImgDesktop});
  height: 1000px;
  display: block;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: left;
  margin-left: -16vw;
  margin-top: -5vw;
  margin-bottom: -5vw;
  padding: 10rem 0;

  @media (max-width: 375px) {
    background-image: url(${SecondSectionImgMobile});
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 75%;
    margin-right: -30vw;
    margin-left: -30vw;
    margin-top: -80vw; 
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  // margin-right: 16vw;
  // margin-top: 5vw;
  height: 90%;
  z-index: 1;
  width: 100%;
  text-align: left;
  max-width: 1300px;
  padding: 0 50px;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 460px;
    margin-left: 15vw;
  }
`;

const FirstBlock = styled.div`
  text-align: left;
`;

const SecondBlock = styled.div`
  text-align: left;
  width: 455px;
  margin: 0 auto;
  padding-top: 25px;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 16vw;
    width: 270px;
  }
`;

const Subtitle = styled.p`
  font-size: 22px;
  color: hsl(208, 49%, 24%);
  font-weight: 500;
  margin-top: 50px;
`;

const Desc = styled.p`
  font-size: 14px;
  color: hsl(208, 49%, 24%);
  line-height: 30px;
  margin-top: 15px;
`;

const SecondSection = () => {
  return (
    <Section>
      <Content >
        <FirstBlock />
        <SecondBlock >
          <Subtitle>
            Free, open, simple
          </Subtitle>
          <Desc>
            Blogr is a free and open source application backed by a large community of helpful developers. It supports
            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
          </Desc>
          <Subtitle>
            Powerful tooling
          </Subtitle>
          <Desc>
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
            capable of producing even the most complicated sites.
          </Desc>
        </SecondBlock>
      </Content>
    </Section>
  )
}

export default SecondSection;