// MyComponent.js
import React from 'react';
import { TextSize } from './TextSize';
import { TextWeight } from './TextWeight';

export const buildTextStyle = ({ fontSize, color, fontWeight }) => {
  return `${TextSize[fontSize]} ${TextWeight[fontWeight]} ${color}`;
};