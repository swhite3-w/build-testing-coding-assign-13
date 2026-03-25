import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledThead = styled.thead<{
  $disabled?: boolean;
  $bg?: string;
}>`
  background: ${(p) => (p.$disabled ? '#d6d6d6' : p.$bg || '#f5f5f5')};
  color: ${(p) => (p.$disabled ? '#7a7a7a' : '#111')};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'default')};
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledThead
      data-testid="table-header"
      aria-disabled={disabled}
      $disabled={disabled}
      $bg={backgroundColor}
    >
      {children}
    </StyledThead>
  );
};
