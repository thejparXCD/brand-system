import * as React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  /** Leading icon node. */
  icon?: React.ReactNode;
  /** Show a remove (×) button and handle the click. */
  onRemove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Label chip for filters and selections; optionally removable. */
export function Tag(props: TagProps): JSX.Element;
