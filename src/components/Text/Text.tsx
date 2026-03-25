import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const sizeMap = {
  sm: "0.9rem",
  md: "1rem",
  lg: "1.2rem",
};

const StyledText = styled.p<{
  $bg?: string;
  $disabled?: boolean;
  $size: keyof typeof sizeMap;
}>`
  margin: 0;
  padding: 8px 10px;
  border-radius: 6px;

  font-size: ${(p) => sizeMap[p.$size]};

  background: ${(p) => (p.$disabled ? "#e0e0e0" : p.$bg || "transparent")};
  color: ${(p) => (p.$disabled ? "#7a7a7a" : "#111")};

  cursor: ${(p) => (p.$disabled ? "not-allowed" : "text")};

  max-width: 100%;
  word-break: break-word;

  @media (min-width: 480px) {
    padding: 10px 12px;
  }
`;

export const Text: React.FC<TextProps> = ({
  text,
  disabled = false,
  backgroundColor,
  size = "md",
}) => {
  return (
    <StyledText
      data-testid="text"
      aria-disabled={disabled}
      $disabled={disabled}
      $bg={backgroundColor}
      $size={size}
    >
      {text}
    </StyledText>
  );
};