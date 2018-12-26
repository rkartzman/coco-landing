import React from 'react';
import styled from 'styled-components';
import PartnershipBlock from '../components/PartnershipBlock';
import StatBlock from '../components/StatBlock'
import QuoteBlock from '../components/QuoteBlock';
import NumberBlock from '../components/NumberBlock';
const Wrapper = styled.div`
`;
class Home extends React.Component {
  render() {
    return(
      <Wrapper>
        <PartnershipBlock/>
        <StatBlock />
        <QuoteBlock />
        <NumberBlock />
      </Wrapper>
    )
  }
}

export default Home;