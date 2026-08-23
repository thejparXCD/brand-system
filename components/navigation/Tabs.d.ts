import * as React from 'react';

export interface TabItem { value: string; label: React.ReactNode; icon?: React.ReactNode; }

export interface TabsProps {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  tone?: 'light' | 'ink';
  style?: React.CSSProperties;
}

/** Underline tab bar with gold active indicator. */
export function Tabs(props: TabsProps): JSX.Element;
