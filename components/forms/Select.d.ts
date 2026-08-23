import * as React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps {
  label?: string;
  /** Options as strings or {value,label} objects. */
  options: Array<string | SelectOption>;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}

/** Styled native dropdown matching the Input field. */
export function Select(props: SelectProps): JSX.Element;
