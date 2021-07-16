import React from 'react';
import PropTypes from 'prop-types';
import { Div } from './';
import styled from 'styled-components';

const Container = styled(Div)`
  display: flex;
  flex: 1;
  flex-direction: ${p => p.row ? 'row' : 'column'};
  width: ${p => p.row ? '100%' : 'auto'};
  height: ${p => p.row ? 'auto' : '100%'};
`;

function Flex(props) {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  )
}

Flex.propTypes = {
  /** Size in pixels */
  row: PropTypes.bool,
}

export default Flex;
