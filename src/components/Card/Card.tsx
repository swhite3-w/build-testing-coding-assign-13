import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const Wrap = styled.div<{ $disabled?: boolean; $bg?: string }>`
  box-sizing: border-box;
  width: min(100%, 520px);
  max-width: 100%;
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 1rem;
  background-color: ${(p) => (p.$disabled ? '#cfcfcf' : (p.$bg ?? '#ffffff'))};
  color: ${(p) => (p.$disabled ? '#6b6b6b' : '#111')};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'default')};
`;

const Title = styled.h3`
  margin: 0 0 0.5rem;
  font-size: clamp(1.05rem, 2vw, 1.3rem);
`;

const Body = styled.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.3vw, 1.05rem);
  line-height: 1.4;
`;

export const Card: React.FC<CardProps> = ({
  disabled = false,
  backgroundColor,
  title = 'Card Title',
  body = 'Card body text',
  children,
  className,
  'data-testid': testId,
}) => (
  <Wrap
    className={className}
    $disabled={disabled}
    $bg={backgroundColor}
    data-testid={testId ?? 'card-root'}
  >
    <Title>{title}</Title>
    {children ?? <Body>{body}</Body>}
  </Wrap>
);

export default Card;
