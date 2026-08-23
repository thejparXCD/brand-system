import * as React from 'react';

export interface BreadcrumbItem { label: React.ReactNode; href?: string; }

export interface BreadcrumbProps {
  /** Trail of items; the last is the current page. */
  items: BreadcrumbItem[];
  style?: React.CSSProperties;
}

/** Path breadcrumb with chevron separators. */
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
