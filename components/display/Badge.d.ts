import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'neutral' | 'brand' | 'gold' | 'success' | 'warning' | 'danger';
  /** Subtle tinted background (default) vs. solid fill. */
  subtle?: boolean;
  /** Show a leading status dot. */
  dot?: boolean;
  style?: React.CSSProperties;
}

/** Small status / category pill. */
export function Badge(props: BadgeProps): JSX.Element;
