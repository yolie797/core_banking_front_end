import React from 'react';
import { PrimaryButton } from './buttonStyles';
import { buildTextStyle } from './TextUtils';

interface SecondaryButtonProps {
  onClick?: () => void;
  text: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onClick, text }) => {
  const textStyle = buildTextStyle({
    fontSize: 'mdText',
    color: '#ffffff', // Assuming white text for the button
    fontWeight: 'mediumText',
  });

  return (
    <PrimaryButton onClick={onClick}>
      <span style={textStyle}>{text}</span>
    </PrimaryButton>
  );
};

export default SecondaryButton;
