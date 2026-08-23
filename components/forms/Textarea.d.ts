import * as React from 'react';

export interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  rows?: number;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}

/** Multi-line text field matching Input styling. */
export function Textarea(props: TextareaProps): JSX.Element;
