import * as React from 'react';

export interface IconButtonProps {
  /** A single icon node. */
  children?: React.ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Fully rounded pill shape. */
  round?: boolean;
  disabled?: boolean;
  'aria-label': string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Compact button holding a single icon. Always pass aria-label. */
export function IconButton(props: IconButtonProps): JSX.Element;
