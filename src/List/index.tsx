import React, {
  ReactElement, ReactFragment, useState, useEffect,
} from 'react';
import { classNames, ColorsShort } from '../_core';
import style from './index.module.scss';

export type ListItemProps = {
  name: string;
  children?: ReactElement | ReactFragment | null;
};

export function ListItem({ children }: ListItemProps) {
  return (
    <div>{children}</div>
  );
}

export type ListType = 'box' | 'btn' | 'line';

export type ListProps = {
  use?: string;
  color?: ColorsShort;
  type?: ListType;
  onSelected?: (arg: string) => void;
  children?: ReactElement ;
};

export type ListState = {
  name: string;
  element?: ReactElement;
};

export function List({
  use, type = 'btn', color = 'dark', children, onSelected,
}: ListProps) {
  const [currListName, setCurrListName] = useState<string>(use || '');
  const [data, setData] = useState<ListState[]>([]);

  useEffect(() => {
    if (children) {
      React.Children.forEach(children, (element) => {
        if (element.type === ListItem) {
          setData((list) => [...list, { name: element.props.name, element }]);
        }
      });
    }
  }, []);

  const changeHandler = (name: string) => {
    setCurrListName(name);
    if (onSelected) {
      onSelected(name);
    }
  };

  return (
      <div className={classNames({ [style[`list--style-${type}`]]: true, [style[`list--color-${color}`]]: true })}>
        <ul className={style.list__group}>
          {data.map((datum, index) => (
            <li
              key={index}
              className={
                classNames({
                  [style['list__item--active']]: datum.name === currListName,
                  click: true,
                  [style.list__item]: true,
                })
              }
              onClick={() => changeHandler(datum.name)}
            >
              <div>{datum.element}</div>
            </li>
          ))}
        </ul>
      </div>
  );
}
