import * as React from 'react';

export interface AlertProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  tone?: 'info' | 'success' | 'warning' | 'danger';
  /** Override the default tone icon. */
  icon?: React.ReactNode;
  /** Show a dismiss button and handle the click. */
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Inline message banner with tone color + left accent rule. */
export function Alert(props: AlertProps): JSX.Element;
