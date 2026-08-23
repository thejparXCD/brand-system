import * as React from 'react';

/**
 * Props for the surface container.
 * @startingPoint section="Display" subtitle="Light, sunken, and dark ink surfaces" viewport="700x220"
 */
export interface CardProps {
  children?: React.ReactNode;
  /** `light` (white), `sunken` (gray), or `ink` (dark brand). */
  tone?: 'light' | 'sunken' | 'ink';
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  /** Adds hover lift + glow. */
  interactive?: boolean;
  /** CSS padding value. */
  padding?: string;
  style?: React.CSSProperties;
}

/** Surface container for grouped content. */
export function Card(props: CardProps): JSX.Element;
