import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
`;

const Heading = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

const Input = styled.input<{ isEditable?: boolean }>`
  width: 100%;
  padding: 0 12px;
  height: 40px;
  border: 1px solid rgba(2, 40, 64, 1); // ThemeColors.hpDarkBlue
  border-radius: 10px;
  font-size: 16px;
  color: ${({ isEditable }) => (isEditable === false ? 'gray' : 'black')};

  &:focus {
    border-color: rgba(2, 40, 64, 0.8); // ThemeColors.hpDarkBlue
    outline: none;
  }
`;

const PrefixIcon = styled.span`
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  color: rgba(153, 128, 218, 1); // Custom icon color
`;

const SuffixIcon = styled.span`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: gray;
`;

interface HPTextFieldProps {
  headingText?: string;
  hintText?: string;
  prefixText?: string;
  icon?: React.ReactNode;
  textStyle?: React.CSSProperties;
  isEditable?: boolean;
  onChanged?: (value: string) => void;
  isPassword?: boolean;
  obscureIcon?: React.ReactNode;
}

const HPTextField: React.FC<HPTextFieldProps> = ({
  headingText,
  hintText,
  prefixText,
  icon,
  textStyle,
  isEditable = true,
  onChanged,
  isPassword = false,
  obscureIcon,
}) => {
  const [value, setValue] = useState('');
  const [isObscure, setIsObscure] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChanged) onChanged(e.target.value);
  };

  return (
    <Container>
      {headingText && <Heading>{headingText}</Heading>}
      <InputWrapper>
        {icon && <PrefixIcon>{icon}</PrefixIcon>}
        <Input
          type={isPassword && isObscure ? 'password' : 'text'}
          placeholder={hintText}
          value={value}
          onChange={handleChange}
          style={textStyle}
          isEditable={isEditable}
          disabled={!isEditable}
        />
        {isPassword && (
          <SuffixIcon onClick={() => setIsObscure(!isObscure)}>
            {isObscure ? <span>Show</span> : <span>Hide</span>}
          </SuffixIcon>
        )}
      </InputWrapper>
    </Container>
  );
};

export default HPTextField;
