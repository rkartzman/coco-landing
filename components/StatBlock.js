import React, { Component } from 'react';
import styled from 'styled-components';

const BackgroundImage = styled.div`
  background-image: url('../static/images/module-2-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Inner = styled.div`
  display: block;
  width: 100%;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const StatItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(min-width: 768px) {
    flex: 1 0 33.33%;

  }
  svg {
    width: 60px;
    height: 60px;
  }
`;

const H1 = styled.h1`
  color: ${props => props.theme.colors.white};
  margin-bottom: 60px;
  text-align: center;
  padding: 0 20px;
  @media(min-width: 768px) {

  }
`;
const Subtext = styled.p`
  font-size: 1.6rem;
  margin-top: 20px;
`;
class StatBlock extends Component {
  render() {
    return <BackgroundImage>
          <H1>Send beautifully crafted messages to your community </H1>
        <Inner>
          <StatItem>
            <svg className="icon icon-megaphone">
              <use xlinkHref="#icon-megaphone" />
            </svg>
            <Subtext>Announce your music releases</Subtext>
          </StatItem>
          <StatItem>
            <svg className="icon icon-chat">
              <use xlinkHref="#icon-chat" />
            </svg>
            <Subtext>Engage with your fans</Subtext>
          </StatItem>
          <StatItem>
            <svg className="icon icon-transaction">
              <use xlinkHref="#icon-transaction" />
            </svg>
            <Subtext>Sell merch & tickets</Subtext>
          </StatItem>
        </Inner>
      </BackgroundImage>;
  }
}

export default StatBlock;