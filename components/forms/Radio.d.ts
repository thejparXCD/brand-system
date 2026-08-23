import * as React from 'react';

export interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  /** Shared name groups radios together. */
  name?: string;
  value?: string;
  disabled?: boolean;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

/** Single radio option; group several with a shared `name`. */
export function Radio(props: RadioProps): JSX.Element;
