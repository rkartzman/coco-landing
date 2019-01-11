import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
const BackgroundImage = styled.div`
  background-image: url('../static/images/module-1-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  min-height: 100vh;
  align-items: center;
  background-position: 64% 0%;
`;
const Inner = styled.div`
    display: block;
    padding: 80px 20px;
    /* flex: none; */
    position: relative;
    overflow: hidden;
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 400px;
      background-image: url('../static/images/wave-background.svg');
      width: 100%;
      background-size: cover;
      background-position: 100%;
      background-repeat: no-repeat;
      
    }
  @media(min-width: 768px) {
    display: flex;
    flex-direction: row;
    &:after {
      background-position: center;
    }
  }
`;
const Button = styled.a`
  background: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.black};
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: 20px 60px;
  border-radius: 6px;
  align-self: flex-start;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  @media(min-width: 769px) {
    &:hover {
      &:after {
        transform: scale3d(9, 9, 1);
      }
    }
  }
  @media(min-width: 769px) {
    &:after {
      content: "";
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 100%;
      margin: -15px 0 0 1px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: ${props => props.theme.colors.white};
      transform-origin: 100% 50%;
      transform: scale3d(1, 2, 1);
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);

    }
  }
`;
const Left = styled.div`
  z-index: 1;
  display: block;
  text-align: center;
  @media (min-width: 769px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
  h2 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    letter-spacing: 0.2px;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 30px;
    @media (min-width: 769px) {
      font-size: 3.2rem;
      line-height: 4.2rem;
    }
  }
  span {
    font-size: 1.6rem;
  }
  @media (min-width: 768px) {
    padding-left: 120px;
    flex: 1 0 50%;
  }
`;
const Right = styled.div`
  text-align: center;
  margin-top: 30px;
  position: relative;
  top: 60px;
  @media (min-width: 768px) {
    top: 220px;
    flex: 1 0 50%;
    margin-top: 0px;
  }
  img {
    @media(min-width: 768px) {
      max-width: 360px;
      margin: 0 auto;

    }
  }
`;
class PartnershipBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      isMobileDevice: false
    }
  }
  componentDidMount() {
    const w = window;
    const value = this.isMobileDevice();
    console.log(value);
    if (value === true) {
      this.setState({
        isMobileDevice: true
      })
    }
  }
  isMobileDevice() {
    const w = window;
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };
  render() {
    
    return <BackgroundImage>
        <Inner>
          <Left>
            <span>Coco - Where artists text their fans.</span>
            
            <h2>
              We've partnered with Open Message to upgrade texting for
              creators. Go from black & white, to colored HTML images that
              invoke emotion & grab attention.
            </h2>
            {this.state.isMobileDevice ? <Button href="sms:12014507319">
                Get in Touch
              </Button> : <Button href="mailto:hello@cocochat.co">
                Get in Touch
              </Button>}
          </Left>
          <Right>
            <img src="../static/images/iphone-mockup.png" />
          </Right>
        </Inner>
      </BackgroundImage>;
  }
}

export default PartnershipBlock;