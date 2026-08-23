import * as React from 'react';

/**
 * Props for the primary action control.
 * @startingPoint section="Forms" subtitle="Gold momentum CTA + blue/outline/ghost variants" viewport="700x150"
 */
export interface ButtonProps {
  /** Button label / content. */
  children?: React.ReactNode;
  /** Visual style. `primary` = gold momentum CTA, `secondary` = brand blue. */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Optional leading icon node. */
  iconLeft?: React.ReactNode;
  /** Optional trailing icon node. */
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Primary action control. */
export function Button(props: ButtonProps): JSX.Element;
