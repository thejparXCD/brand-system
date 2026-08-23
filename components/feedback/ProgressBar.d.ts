import * as React from 'react';

export interface ProgressBarProps {
  /** Fill percentage, 0–100. */
  value: number;
  label?: React.ReactNode;
  /** Show the percentage on the right. */
  showValue?: boolean;
  /** Fill color — gold momentum (default) or blue. */
  accent?: 'gold' | 'blue';
  tone?: 'light' | 'ink';
  style?: React.CSSProperties;
}

/** Horizontal progress track with brand-gradient fill. */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
