import { TextSize } from './TextSize';
import { TextWeight } from './TextWeight';

export const buildTextStyle = ({ fontSize, color, fontWeight }) => {
  return {
    fontSize: TextSize[fontSize],
    color: color,
    fontWeight: TextWeight[fontWeight],
  };
};
