export type DropdownOption = { label: string; value: string };

export type DropdownProps = {
  'data-testid'?: string;
  disabled?: boolean;
  backgroundColor?: string;
  label?: string;
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};
