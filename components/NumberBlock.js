import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const BackgroundImage = styled.div`
  background-image: url('../static/images/module-4-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  padding: 50px 20px 60px 20px;
  @media(min-width: 768px) {
    padding: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  
`;
const Number = styled.div`
  background-image: url("/static/images/waves-pattern.png");
  display: flex;
  flex-direction: column;
  padding: 70px 70px 70px 70px;
  border-radius: 6px;
  background-size: cover;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    min-width: 360px;
    flex: 1 0 33%;
    max-width: 33%;
  }
  h1 {
    color: ${props => props.theme.colors.black};
    font-size: 4.8rem;
    line-height: 6rem;
    margin: 0;
    letter-spacing: 24px;
  }
`;

const Copy = styled.div`
  margin-top: 30px;
  text-align: center;
  @media(min-width: 376px) {
    text-align: left;
  }
  @media(min-width: 768px) {
    padding-left: 75px;
    margin-top: 0;
  }
  label {
    color: ${props => props.theme.colors.seafoam};
    font-size: 1.6rem;
    line-height: 22px;
  }
  p {
    color: ${props => props.theme.colors.white};
    font-size:  3.2rem;
    line-height: 4.2rem;
    margin: 0;
  }
`;

export const PrimaryLabel = styled.label`
  text-transform: uppercase;
  font-size: 1.1rem;
  line-height: 1.8rem;
  color: ${props => props.theme.colors.black};
  font-weight: bold;
  margin-bottom: 30px;
`;
class NumberBlock extends React.Component {
  render() {
    return <BackgroundImage>
        <Number>
          <PrimaryLabel>Our Number</PrimaryLabel>
          <h1>917/</h1>
          <h1>997/</h1>
          <h1>3904</h1>
        </Number>
        <Copy>
          <label>Song of the week</label>
          <p>
            Text us, cause we're starting a weekly playlist. It'll be
            cool, we promise
          </p>
        </Copy>
      </BackgroundImage>;
  }
}

export default NumberBlock;