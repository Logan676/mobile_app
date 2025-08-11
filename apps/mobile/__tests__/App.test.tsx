/**
 * @format
 */

import React from 'react';
import ReactTestRenderer, { act } from 'react-test-renderer';
import { Text } from 'react-native';
import App from '../App';

test('renders home screen with cards', async () => {
  let root;
  await act(async () => {
    root = ReactTestRenderer.create(<App />);
  });
  const headingNodes = root.root.findAll(
    (node) => node.type === Text && node.props.children === 'Heading 1',
  );
  expect(headingNodes.length).toBe(1);
});
