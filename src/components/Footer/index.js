import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinkTitle, FooterLinkWrapper, FooterWrapper, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="#">How it works</FooterLink>
                <FooterLink to="#">Testimonials</FooterLink>
                <FooterLink to="#">Careers</FooterLink>
                <FooterLink to="#">Investors</FooterLink>
                <FooterLink to="#">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="#">How it works</FooterLink>
                <FooterLink to="#">Testimonials</FooterLink>
                <FooterLink to="#">Careers</FooterLink>
                <FooterLink to="#">Investors</FooterLink>
                <FooterLink to="#">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>

            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="#">How it works</FooterLink>
                <FooterLink to="#">Testimonials</FooterLink>
                <FooterLink to="#">Careers</FooterLink>
                <FooterLink to="#">Investors</FooterLink>
                <FooterLink to="#">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="#">How it works</FooterLink>
                <FooterLink to="#">Testimonials</FooterLink>
                <FooterLink to="#">Careers</FooterLink>
                <FooterLink to="#">Investors</FooterLink>
                <FooterLink to="#">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Kuwago
              </SocialLogo>
              <WebsiteRights>Kuwago &copy; {new Date().getFullYear()} All rights reserved. </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  )
}

export default Footer
