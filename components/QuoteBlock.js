import React from 'react';
import styled from 'styled-components';

const QuoteWrapper = styled.div`
  background: ${props => props.theme.colors.orange};
  
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  line-height: 320px;
  overflow: hidden;
`;
const Letters = styled.h6`
  font-size: 32px;
  color: #ffa949;
  transform: scale(17) translate3d(17%, 0, 0);
  @media (min-width: 768px) {
    transform: scale(17) translate3d(38%, 0, 0);
  }
`;
const Quote = styled.h3`
  font-size: 3.2rem;
  line-height: 42px;
  letter-spacing: 0.2px;
  color: ${props => props.theme.colors.black};
  margin: 0;
  z-index: 1;
  text-align: center;
  position: absolute;
  @media(min-width: 768px) {
    max-width: 60%;
    margin: 0 auto;
    position: relative;

  }
`;
const QuoteBlock = () => (
  <QuoteWrapper>
    <Letters>65%</Letters>
    <Quote>
      Text messages have a open rate that is 65% higher compared to emails.
    </Quote>
  </QuoteWrapper>
);

export default QuoteBlock;