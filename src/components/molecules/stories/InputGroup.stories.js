import React from 'react';
import { InputGroup } from '../';
import { Div, Text } from '../../atoms'
export default { title: 'molecules.InputGroup' };

export const basic = () => <InputGroup/>;

export const placeholder = () => <InputGroup placeholder="Enter..."/>;

export const instructions = () =>
  <InputGroup
    validation={<Text color="secondaryText" lineHeight="md" value="Instructions could go here"/>}
  />;

export const validation = () =>
  <InputGroup
    validation={<Text color="danger" lineHeight="md" value="Invalid Content"/>}
  />;

export const disabled = () => <InputGroup disabled/>;
