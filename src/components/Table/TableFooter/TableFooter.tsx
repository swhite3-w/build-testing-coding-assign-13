import React from "react";
import styled from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

const StyledTfoot = styled.tfoot<{
  $disabled?: boolean;
  $bg?: string;
}>`
  background: ${(p) => (p.$disabled ? "#d6d6d6" : p.$bg || "#f5f5f5")};
  color: ${(p) => (p.$disabled ? "#7a7a7a" : "#111")};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTfoot
      data-testid="table-footer"
      aria-disabled={disabled}
      $disabled={disabled}
      $bg={backgroundColor}
    >
      {children}
    </StyledTfoot>
  );
};