import React from "react";

export type CardProps = {
  "data-testid"?: string;
  disabled?: boolean;
  backgroundColor?: string;
  title?: string;
  body?: string;
  children?: React.ReactNode;
  className?: string;
};