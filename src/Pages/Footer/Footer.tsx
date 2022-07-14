import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from './FooterStyles';
import logo from '../../img/logo.png';
import fb from '../../img/fb.png';
import insta from '../../img/insta.png';
import git from '../../img/git.png';
import twitter from '../../img/twitter.png';

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Community</Heading>
            <FooterLink href='#'>About</FooterLink>
            <FooterLink href='#'>Affiliate</FooterLink>
            <FooterLink href='#'>Careers & Cultures</FooterLink>
          </Column>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href='#'>Google Developer Group</FooterLink>
            <FooterLink href='#'>Cloud Community</FooterLink>
            <FooterLink href='#'>Kolkata</FooterLink>
          </Column>
          <Column>
            <Heading>Console</Heading>
            <FooterLink href='#'>Kolkata Cloud Community</FooterLink>
            <FooterLink href='#'>Developers</FooterLink>
          </Column>
        </Row>
      </Container>
      <Row>
        <img src={logo} alt='logo' />
        <p> </p>
        <p>Follow Us on :</p>
        <img src={fb} />
      </Row>
    </Box>
  );
};
export default Footer;
