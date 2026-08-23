import type { HTMLAttributes, ReactNode } from 'react';

export interface PillarCardProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  theme?: 'technology' | 'growth' | 'mission' | 'data' | 'momentum';
  index?: ReactNode;
}

export function PillarCard(props: PillarCardProps): JSX.Element;
