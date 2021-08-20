import React from 'react'
import styled from 'styled-components'
import EditorImgDesktop from '../assets/illustration-editor-desktop.svg'
// import EditorImgMobile from '../assets/illustration-editor-mobile.svg'

const Section = styled.section`
  background-image: url(${EditorImgDesktop});
  height: 1000px;
  display: block;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: right;
  left: 0;
  margin-right: -16vw;
  margin-top: -5vw;
  padding: 10rem 0;
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
`;

const Title = styled.p`
  font-size: 30px;
  color: hsl(208, 49%, 24%);
  font-weight: 400;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 16vw;
`;

const FirstBlock = styled.div`
  text-align: left;
  width: 455px;
`;

const SecondBlock = styled.div`
  text-align: left;
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

const DesignSection = () => {
  return (
    <Section>
      <Title>
          Designed for the future
      </Title>
      <Content >
        <FirstBlock >
          <Subtitle>
            Introducing an extensible editor
          </Subtitle>
          <Desc>
            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
            change the looks of a blog.
          </Desc>
          <Subtitle>
            Robust content management
          </Subtitle>
          <Desc>
            Flexible content management enables users to easily move through posts. Increase the usability of your blog
            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
          </Desc>
        </FirstBlock>
        <SecondBlock />
      </Content>
    </Section>
  )
}

export default DesignSection;