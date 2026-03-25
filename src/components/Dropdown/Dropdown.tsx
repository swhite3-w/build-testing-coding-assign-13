import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const Wrap = styled.div<{ $disabled?: boolean; $bg?: string }>`
  box-sizing: border-box;
  width: min(100%, 520px);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  background-color: ${(p) => p.$bg ?? 'transparent'};
  padding: 0.5rem;
  border-radius: 12px;
  opacity: ${(p) => (p.$disabled ? 0.95 : 1)};
`;

const Label = styled.label<{ $disabled?: boolean }>`
  font-size: 0.95rem;
  color: ${(p) => (p.$disabled ? '#6b6b6b' : '#111')};
`;

const Select = styled.select<{ $disabled?: boolean }>`
  width: 100%;
  min-height: 42px;
  padding: 0.55rem 0.75rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(p) => (p.$disabled ? '#cfcfcf' : '#ffffff')};
  color: ${(p) => (p.$disabled ? '#6b6b6b' : '#111')};
`;

export const Dropdown: React.FC<DropdownProps> = ({
  disabled = false,
  backgroundColor,
  label = 'Choose an option',
  options,
  value,
  onChange,
  className,
  'data-testid': testId,
}) => {
  return (
    <Wrap
      className={className}
      $disabled={disabled}
      $bg={backgroundColor}
      data-testid={testId ?? 'dropdown-root'}
    >
      <Label $disabled={disabled}>{label}</Label>
      <Select
        $disabled={disabled}
        disabled={disabled}
        value={value ?? ''}
        onChange={(e) => onChange?.(e.target.value)}
      >
        <option value="" disabled>
          Select...
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </Wrap>
  );
};

export default Dropdown;
