import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const Wrap = styled.div<{ $disabled?: boolean; $bg?: string }>`
  box-sizing: border-box;
  background-color: ${(p) => (p.$disabled ? "#cfcfcf" : p.$bg ?? "transparent")};
  border-radius: 12px;
  overflow: hidden;
  max-width: 100%;
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};
  filter: ${(p) => (p.$disabled ? "grayscale(1)" : "none")};
`;

const StyledImg = styled.img<{ $w?: string; $h?: string }>`
  display: block;
  width: ${(p) => p.$w ?? "100%"};
  height: ${(p) => p.$h ?? "auto"};
  max-width: 100%;
`;

export const Img: React.FC<ImgProps> = ({
  disabled = false,
  backgroundColor,
  src,
  alt = "image",
  width,
  height,
  className,
  "data-testid": testId,
}) => (
  <Wrap
    className={className}
    $disabled={disabled}
    $bg={backgroundColor}
    data-testid={testId ?? "img-root"}
  >
    <StyledImg src={src} alt={alt} $w={width} $h={height} />
  </Wrap>
);

export default Img;