import * as React from 'react';

export interface TooltipProps {
  /** Tooltip text. */
  label: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** The trigger element. */
  children: React.ReactNode;
  style?: React.CSSProperties;
}

/** Hover/focus tooltip on a navy chip. */
export function Tooltip(props: TooltipProps): JSX.Element;
