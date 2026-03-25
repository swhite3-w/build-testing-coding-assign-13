import React from "react";
import styled from "styled-components";
import { TableCellProps } from "./TableCell.types";

const StyledTd = styled.td<{
  $disabled?: boolean;
  $bg?: string;
}>`
  padding: 8px 12px;
  border-bottom: 1px solid #e5e5e5;

  background: ${(p) => (p.$disabled ? "#f0f0f0" : p.$bg || "transparent")};
  color: ${(p) => (p.$disabled ? "#7a7a7a" : "#111")};

  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};
`;

export const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTd
      data-testid="table-cell"
      aria-disabled={disabled}
      $disabled={disabled}
      $bg={backgroundColor}
    >
      {children}
    </StyledTd>
  );
};