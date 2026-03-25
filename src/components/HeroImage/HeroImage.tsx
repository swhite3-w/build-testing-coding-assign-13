import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const Wrap = styled.section<{
  $disabled?: boolean;
  $bg?: string;
  $img: string;
}>`
  box-sizing: border-box;
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  background-color: ${(p) => (p.$disabled ? '#cfcfcf' : (p.$bg ?? '#111'))};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'default')};
  filter: ${(p) => (p.$disabled ? 'grayscale(1)' : 'none')};
  min-height: clamp(180px, 35vw, 420px);
  display: flex;
  align-items: flex-end;
  background-image: url(${(p) => p.$img});
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0));
`;

const Title = styled.h2`
  margin: 0;
  color: white;
  font-size: clamp(1.1rem, 3vw, 2rem);
`;

const Subtitle = styled.p`
  margin: 0.25rem 0 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  disabled = false,
  backgroundColor,
  imageUrl,
  title = 'Hero Title',
  subtitle = 'Hero subtitle text',
  className,
  'data-testid': testId,
}) => (
  <Wrap
    className={className}
    $disabled={disabled}
    $bg={backgroundColor}
    $img={imageUrl}
    data-testid={testId ?? 'hero-root'}
  >
    <Overlay>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Overlay>
  </Wrap>
);

export default HeroImage;
