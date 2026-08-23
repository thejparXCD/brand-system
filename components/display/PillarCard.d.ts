import * as React from 'react';

/**
 * Props for the signature pillar card.
 * @startingPoint section="Display" subtitle="Brand pillar card with service-line gradients" viewport="380x300"
 */
export interface PillarCardProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Icon node rendered in the gradient tile. */
  icon?: React.ReactNode;
  /** Service-line theme — sets the gradient wash + icon tile. */
  theme?: 'technology' | 'growth' | 'mission' | 'data' | 'momentum';
  /** Optional index marker, e.g. "M1". */
  index?: string;
  style?: React.CSSProperties;
}

/** Signature dark pillar card for the three M's and the four service lines. */
export function PillarCard(props: PillarCardProps): JSX.Element;
