import * as React from 'react';

export interface AvatarProps {
  /** Full name — used for initials fallback and alt text. */
  name?: string;
  /** Image URL; falls back to gradient initials when absent. */
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  style?: React.CSSProperties;
}

/** User avatar — image or brand-gradient initials. */
export function Avatar(props: AvatarProps): JSX.Element;
