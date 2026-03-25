import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{
  $bg?: string;
  $disabled?: boolean;
}>`
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  max-width: 320px;

  background: ${(p) => (p.$disabled ? '#bdbdbd' : p.$bg || '#1976d2')};
  color: ${(p) => (p.$disabled ? '#6b6b6b' : '#ffffff')};

  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(p) => (p.$disabled ? 0.7 : 1)};

  @media (min-width: 480px) {
    width: auto;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  backgroundColor,
  onClick,
}) => {
  return (
    <StyledButton
      type="button"
      $bg={backgroundColor}
      $disabled={disabled}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {label}
    </StyledButton>
  );
};
