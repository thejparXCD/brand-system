import type { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  tone?: 'light' | 'sunken' | 'ink';
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
  padding?: string;
}

export function Card(props: CardProps): JSX.Element;
