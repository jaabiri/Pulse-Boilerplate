import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const font = ({ theme }) => theme.font.primary;

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 15px;
  font-family: ${font};
`;

const Base = ({ header, children }) => (
  <Wrapper>
    {header}
    {children}
  </Wrapper>
);

Base.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node
};

export default Base;