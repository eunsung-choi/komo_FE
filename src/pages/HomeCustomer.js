import React from 'react';
import styled from 'styled-components';
import MyQrCode from '../comonents/Homecustomer/MyQrCode';
import PageButton from '../comonents/Homecustomer/PageButton';

function HomeCustomer() {
  return (
    <Body>
      <MyQrCode />
      <PageButton />
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

export default HomeCustomer;