import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Wrap = styled.label<{ $disabled?: boolean; $bg?: string }>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0.75rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: ${(p) => (p.$disabled ? '#cfcfcf' : (p.$bg ?? '#ffffff'))};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  max-width: 100%;
`;

const Dot = styled.input`
  width: 18px;
  height: 18px;
`;

const Text = styled.span<{ $disabled?: boolean }>`
  color: ${(p) => (p.$disabled ? '#6b6b6b' : '#111')};
  font-size: clamp(0.95rem, 1.2vw, 1rem);
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  disabled = false,
  backgroundColor,
  label = 'Radio',
  name,
  checked,
  onChange,
  className,
  'data-testid': testId,
}) => {
  return (
    <Wrap
      className={className}
      $disabled={disabled}
      $bg={backgroundColor}
      data-testid={testId ?? 'radio-root'}
    >
      <Dot
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <Text $disabled={disabled}>{label}</Text>
    </Wrap>
  );
};

export default RadioButton;
