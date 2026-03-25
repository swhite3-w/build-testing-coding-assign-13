import React from "react";
import styled from "styled-components";
import { TableRowProps } from "./TableRow.types";

const StyledTr = styled.tr<{
  $disabled?: boolean;
  $bg?: string;
}>`
  background: ${(p) => (p.$disabled ? "#ededed" : p.$bg || "transparent")};
  color: ${(p) => (p.$disabled ? "#7a7a7a" : "#111")};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};
`;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTr
      data-testid="table-row"
      aria-disabled={disabled}
      $disabled={disabled}
      $bg={backgroundColor}
    >
      {children}
    </StyledTr>
  );
};