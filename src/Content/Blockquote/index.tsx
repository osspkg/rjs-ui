import React, { ReactElement, ReactFragment } from 'react';
import { ColorsShort } from '../../_core';
import style from './index.module.scss';

export type BlockquoteProps = {
  color?: ColorsShort;
  children?: ReactElement | ReactFragment | null;
};

export function Blockquote({ color, children }: BlockquoteProps) {
  return <div className={`${style[`bq-${color}`]} ${style.bq}`}>{children}</div>;
}
