export type RadioButtonProps = {
  "data-testid"?: string;
  disabled?: boolean;
  backgroundColor?: string;
  label?: string;
  name: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
};