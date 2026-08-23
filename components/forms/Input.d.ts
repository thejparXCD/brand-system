import * as React from 'react';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  type?: string;
  /** Muted text below the field. */
  helperText?: string;
  /** Error message — overrides helperText and turns the field red. */
  error?: string;
  /** Leading icon node. */
  iconLeft?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

/** Single-line text field with label, helper/error text, and icon slot. */
export function Input(props: InputProps): JSX.Element;
