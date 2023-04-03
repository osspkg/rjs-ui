import React, {
  HTMLAttributes, ReactElement, ReactFragment,
} from 'react';
import style from './index.module.scss';

export type RowProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactElement | ReactFragment | null;
};

export function Row({ children, ...other }:RowProps) {
  return (
      <div className={style.row} {...other}>
        {children}
      </div>
  );
}

const SwitchClass = (count: number) => [style.col1, style.col2, style.col3, style.col4, style.col5,
  style.col6, style.col7, style.col8, style.col9, style.col10,
  style.col11, style.col12][count - 1] || style.col;

export type ColProps = RowProps & {
  count?: number
};

export function Col({ children, count, ...other }:ColProps) {
  return (
      <div className={SwitchClass(count || -1)} {...other}>
        {children}
      </div>
  );
}
