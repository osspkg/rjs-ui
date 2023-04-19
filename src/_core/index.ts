import React, { ReactElement } from 'react';

export enum Color {
  Default = '',
  Light = 'light',
  Secondary = 'secondary',
  Warning = 'warning',
  Danger = 'danger',
  Success = 'success',
  Info = 'info',
  Primary = 'primary',
  Dark = 'dark',
}

export type ColorsFull = 'light' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'dark';
export type ColorsShort = 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'dark';

export const Delay = 300;

export function classNames(args:{ [className: string]: boolean }): string {
  return Object.entries(args)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(' ');
}

export function extractText(el: ReactElement): string {
  if (typeof el.props.children === 'string') {
    return el.props.children;
  }

  return React.Children.map(el.props.children, (child) => extractText(child))?.join(' ') || '';
}
