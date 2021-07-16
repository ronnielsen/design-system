import React from 'react';
import { Button, Flex, Icon } from '../';

export default { title: 'atoms.Button' };

export const defaultButton = () => <Button label="Basic"/>;

export const appearance = () =>
  <Flex>
    <Button bg="primary" label="Primary" />
    <Button bg="dark" label="Dark" />
    <Button bg="danger" label="Danger" />
    <Button bg="success" label="Success" />
    <Button bg="warning" color="text" label="Warning" />
    <Button variant="plain" label="Plain" />
    <Button variant="link" label="Link" />
  </Flex>

export const withIcon = () =>
  <Flex>
    <Button
      prepend={
        <Icon name="ArrowLeft" color="white"/>
      }
      label="Prepend"
    />
    <Button
      append={
        <Icon name="ArrowRight" color="white"/>
      }
      label="Append"
    />
  </Flex>

export const fullWidth = () =>
  <Flex row>
    <Button label="Full Width" fullWidth/>
  </Flex>

export const padding = () =>
  <Flex>
    <Button label="Basic" px="xxs" py="xxxs" fontSize="xs"/>
    <Button label="Basic" px="xs" py="xxs" fontSize="sm"/>
    <Button label="Basic" px="sm" py="xs" fontSize="md"/>
  </Flex>

export const radius = () =>
  <Flex>
    <Button label="Sharp" px="sm" py="xs" fontSize="md" borderRadius="0px"/>
    <Button label="4px" px="sm" py="xs" fontSize="md" borderRadius="4px"/>
    <Button label="8px" px="sm" py="xs" fontSize="md" borderRadius="8px"/>
    <Button label="16px" px="sm" py="xs" fontSize="md" borderRadius="16px"/>
    <Button label="Round" px="sm" py="xs" fontSize="md" borderRadius="45px"/>
  </Flex>
