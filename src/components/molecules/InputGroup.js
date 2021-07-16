import React from 'react';
import PropTypes from 'prop-types';
import { Div, Input, Text } from '../atoms';
import styled from 'styled-components';

const Container = styled(Div)`
  display: flex;
  flex: 1;
  flex-direction: ${p => p.row ? 'row' : 'column'};
  width: 100%;
  flex-direction: column;
`;

const Label = styled(Text)`
  line-height: 32px
`;

function InputGroup(props) {
  return (
    <Container>
      <Label value={props.label || "Label"}/>
      <Input {...props}/>
      {props.validation}
    </Container>
  )
}

InputGroup.propTypes = {
  /** Text Label */
  label: PropTypes.string,
  /** Placeholder input text */
  placeholder: PropTypes.text,
  /** bottom content */
  validation: PropTypes.obj,
}

export default InputGroup;
