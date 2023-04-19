import React, {
  ReactElement, ReactFragment,
} from 'react';
import { ColorsShort } from '../../_core';
import style from './index.module.scss';

export type BoxProps = {
  color?: ColorsShort
  children?: ReactElement | ReactFragment | null;
};

export function Box({ color, children }:BoxProps) {
  return (
      <div className={`${style[`box-${color}`]} ${style.box}`}>
        {children}
      </div>
  );
}
