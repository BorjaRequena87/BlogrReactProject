import React from 'react';
import styled from 'styled-components/macro';
import LogoImg from '../assets/logo.svg';
import { Link } from 'react-router-dom';


const FooterContainer = styled.div`
  padding: 80px 60px;
  background: hsl(240, 10%, 16%);
  border-top-right-radius: 150px;
`;

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
`;

const Logo = styled.div`
  width: 100px;
  height: 40px;
  background: url(${LogoImg});
  background-size: 100% 100%;
  cursor: pointer;
`;

const FooterLink = styled(Link)`
  color: #fff;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: hsl(13, 100%, 72%);
    transition: 200ms ease-in;
  }
`;

const Title = styled.div`
  font-size: 18px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <Row>
          <Column>
            <Logo />
          </Column>
          <Column>
            <Title>Product</Title>
            <FooterLink to="/">Overview</FooterLink>
            <FooterLink to="/">Pricing</FooterLink>
            <FooterLink to="/">Marketplace</FooterLink>
            <FooterLink to="/">Features</FooterLink>
            <FooterLink to="/">Integrations</FooterLink>
          </Column>
          <Column>
            <Title>Company</Title>
            <FooterLink to="/">About</FooterLink>
            <FooterLink to="/">Team</FooterLink>
            <FooterLink to="/">Blog</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
          </Column>
          <Column>
            <Title>Connect</Title>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Newsletter</FooterLink>
            <FooterLink to="/">Linkedin</FooterLink>
          </Column>
        </Row>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;