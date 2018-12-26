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
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  color: ${props => props.theme.colors.white};
`;

const StatItem = styled.div`
  flex: 1 0 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    width: 60px;
    height: 60px;
  }
`;

const H1 = styled.h1`
  color: ${props => props.theme.colors.white};
`;
const Subtext = styled.p`
  font-size: 1.6rem;
  margin-top: 20px;
`;
class StatBlock extends Component {
  render() {
    return <BackgroundImage>
          <H1>The power of texting just got stronger. </H1>
        <Inner>
          <StatItem>
            <svg className="icon icon-megaphone">
              <use xlinkHref="#icon-megaphone" />
            </svg>
            <Subtext>Launch beautiful text campaigns</Subtext>
          </StatItem>
          <StatItem>
            <svg className="icon icon-chat">
              <use xlinkHref="#icon-chat" />
            </svg>
            <Subtext>Text directly with your fans</Subtext>
          </StatItem>
          <StatItem>
            <svg className="icon icon-transaction">
              <use xlinkHref="#icon-transaction" />
            </svg>
            <Subtext>Earn money through SMS transactions</Subtext>
          </StatItem>
        </Inner>
      </BackgroundImage>;
  }
}

export default StatBlock;