// MyComponent.js
import React from 'react';
import { TextSize } from './Enums/TextSize';
import { TextWeight } from './Enums/TextWeight';

interface TextStyleOptions {
  fontSize: keyof typeof TextSize;
  color: string;
  fontWeight: keyof typeof TextWeight;
}

export const buildTextStyle = ({ fontSize, color, fontWeight }: TextStyleOptions): string => {
  return `${TextSize[fontSize]} ${TextWeight[fontWeight]} ${color}`;
};
