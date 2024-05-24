import { TextSize } from './Styles/TextSize';
import { TextWeight } from './Styles/TextWeight';

interface TextStyleParams {
  fontSize: keyof typeof TextSize;
  color: string;
  fontWeight: keyof typeof TextWeight;
}

export const buildTextStyle = ({ fontSize, color, fontWeight }: TextStyleParams) => {
  return {
    fontSize: TextSize[fontSize],
    color: color,
    fontWeight: TextWeight[fontWeight],
  };
};
