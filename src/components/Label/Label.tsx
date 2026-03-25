import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.span<{
  $bg?: string;
  $disabled?: boolean;
}>`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.95rem;
  line-height: 1.2;

  background: ${(p) => (p.$disabled ? "#e0e0e0" : p.$bg || "transparent")};
  color: ${(p) => (p.$disabled ? "#7a7a7a" : "#111")};

  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};

  max-width: 100%;
  word-break: break-word;

  @media (min-width: 480px) {
    font-size: 1rem;
  }
`;

export const Label: React.FC<LabelProps> = ({
  text,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledLabel
      data-testid="label"
      aria-disabled={disabled}
      $disabled={disabled}
      $bg={backgroundColor}
    >
      {text}
    </StyledLabel>
  );
};