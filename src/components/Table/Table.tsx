import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const Wrapper = styled.div<{
  $disabled?: boolean;
  $bg?: string;
}>`
  width: 100%;
  overflow-x: auto;
  border-radius: 10px;

  background: ${(p) => (p.$disabled ? "#e0e0e0" : p.$bg || "transparent")};
  opacity: ${(p) => (p.$disabled ? 0.85 : 1)};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 520px;
`;

export const Table: React.FC<TableProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <Wrapper data-testid="table-wrapper" $disabled={disabled} $bg={backgroundColor}>
      <StyledTable aria-disabled={disabled}>{children}</StyledTable>
    </Wrapper>
  );
};