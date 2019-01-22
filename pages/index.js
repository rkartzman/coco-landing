import React from 'react';
import styled from 'styled-components';
import PartnershipBlock from '../components/PartnershipBlock';
import StatBlock from '../components/StatBlock'
import QuoteBlock from '../components/QuoteBlock';
import NumberBlock from '../components/NumberBlock';
import EmailModal from '../components/EmailModal';
const Wrapper = styled.div`
`;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false
    }
    this.modalHandler = this.modalHandler.bind(this);
    this.modalToggler = this.modalToggler.bind(this);
  }
  modalHandler(e) {
    e.preventDefault();
    this.setState({
      displayModal: !this.state.displayModal
    })
  }
  modalToggler(e) {
    e.stopPropagation();
    // console.log(e.currentTarget);
    this.setState({
      displayModal: !this.state.displayModal
    })
  }
  render() {
    return(
      <Wrapper>
        <PartnershipBlock handler={this.modalHandler} />
        <StatBlock />
        <QuoteBlock />
        <NumberBlock />
        <EmailModal display={this.state.displayModal} hide={this.modalToggler} />
      </Wrapper>
    )
  }
}

export default Home;