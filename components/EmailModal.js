import React from 'react';
import styled from 'styled-components';
import {PrimaryLabel} from '../components/NumberBlock';
const Button = styled.button`
  background: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.black};
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: 20px 60px;
  border-radius: 6px;
  border-color: none;
  border-width: 0;
  border-style: none;
  align-self: flex-start;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 100%;
  
  @media (min-width: 769px) {
    &:hover {
      &:after {
        transform: scale3d(9, 9, 1);
      }
    }
  }
  @media (min-width: 769px) {
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
const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  background-color: #000000;
  background-color: rgba(0, 0, 0, 0.75);
  animation: fadein 1s;
  -moz-animation: fadein 1s;
  -webkit-animation: fadein 1s;
  -o-animation: fadein 1s;
  display: none;
  &.active {
    display: flex;
  }
  .modal-outer {
    position: relative;
    width: 95%;
    max-width: 580px;
    
    background: #ffffff;
    cursor: default;
    .close {
      position: absolute;
      right: 25px;
      top: 25px;
      cursor: pointer;
    }
    .icon-close {
      stroke: black;
    }
    .modal-inner {
      padding: 55px 20px;
      @media(min-width: 769px) {
        padding: 60px;

      }
    }
  }
`;

const Input = styled.input`
  border-radius: 4px;
  background: #ECECEC;
  width: 100%;
  border: none;
  -webkit-appearance: none;
  padding: 18px;
`;
const Textarea = styled.textarea`
  border-radius: 4px;
  background: #ececec;
  width: 100%;
  border: none;
  -webkit-appearance: none;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 30px;
`;

const Label = styled(PrimaryLabel)`
  margin-bottom: 7px;
`;

class EmailModal extends React.Component {
  render() {
    return <ModalWrapper className={this.props.display ? "active" : "hide"}>
        <div className="modal-outer">
          <span className="close" onClick={this.props.hide}>
            <svg className="icon icon-close">
              <use xlinkHref="#icon-close" />
            </svg>
            
          </span>
          <div className="modal-inner">
            <form name="contact" method="POST" data-netlify="true">
              
              <InputWrapper>
                <Label>
                  Your Email: 
                </Label>
                <Input type="email" name="email" />
              </InputWrapper>
              
              <InputWrapper>
                <Label>
                  Message: 
                </Label>
                <Textarea name="message" rows="15"/>
              </InputWrapper>
              <InputWrapper>
                <Button type="submit">Send</Button>
              </InputWrapper>
            </form>
          </div>
        </div>
      </ModalWrapper>;
  }
}

export default EmailModal;
