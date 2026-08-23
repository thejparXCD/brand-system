import * as React from 'react';

export interface StatProps {
  /** The headline number, e.g. "+38.4%" or "1,204". */
  value: React.ReactNode;
  /** Uppercase mono label above the value. */
  label: string;
  /** Optional change indicator, e.g. "12%". */
  delta?: string;
  deltaDirection?: 'up' | 'down';
  tone?: 'light' | 'ink';
  style?: React.CSSProperties;
}

/** Headline metric with optional delta — dashboards, decks, hero stats. */
export function Stat(props: StatProps): JSX.Element;
