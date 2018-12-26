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
`;
const Inner = styled.div`
    display: block;
    padding: 80px 20px;
    /* flex: none; */
  @media(min-width: 768px) {
    display: flex;
    flex-direction: row;
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
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(min-width: 768px) {
    padding-left: 120px;
    flex: 1 0 50%;

  }
  
`;
const Right = styled.div`
  text-align: center;
  margin-top: 30px;
  @media (min-width: 768px) {
    flex: 1 0 50%;
    margin-top: 0px;
  }
  img {
    max-width: 360px;
    margin: 0 auto;
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
            <label>What is Coco?</label>
            <p>
              Coco & Open Message have partnered up to give musicians &
              creators the ability to send beautifully designed messages,
              straight to their fans. Get in touch with us to help you run
              your own Text Campaigns.
            </p>
            {this.state.isMobileDevice ? <Link href="sms:12014507319">
                <Button>Get in Touch</Button>
          </Link> : <Link href="mailto:remykartzman@gmail.com">
                <Button>Get in blah</Button>
              </Link>}
          </Left>
          <Right>
            <img src="../static/images/Phone-3.png" />
          </Right>
        </Inner>
      </BackgroundImage>;
  }
}

export default PartnershipBlock;