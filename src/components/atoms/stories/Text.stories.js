import React from 'react';
import { Text } from '../';

export default { title: 'atoms.Text' };

export const plain = () => <Text value="Hello World" />;

export const variants = () =>
  <div>
    <Text variant="xxs" value="xxs 12px" />
    <Text variant="xs" value="xs 14px" />
    <Text variant="sm" value="sm 18px" />
    <Text variant="md" value="md 24px" />
    <Text variant="lg" value="lg 32px" />
    <Text variant="xl" value="xl 48px" />
    <Text variant="xxl" value="xxl 64px" />
    <Text variant="xxxl" value="xxxl 96px" />
  </div>;

export const colors = () =>
  <div>
    <Text color="text" value="Text" />
    <Text color="secondaryText" value="Secondary Text" />
    <Text bg="dark" color="lightText" value="Light Text" />
    <Text color="primary" value="Primary" />
  </div>;

export const weights = () =>
  <div>
    <Text variant="lg" value="Regular"/>
    <Text variant="lg" value="Bold" bold/>
  </div>;
