import React, { ReactElement, useEffect, useState } from 'react';
import { ColorsShort, extractText } from '../../_core';
import style from './index.module.scss';

export type SelectOptionProps = {
  value: string;
  children?: ReactElement;
};

export function Option({ children }: SelectOptionProps) {
  return children;
}

export type SelectProps = {
  title?: string;
  color?: ColorsShort;
  value?: string;
  placeholder?: string;
  onSelected?: (arg: string) => void;
  children: ReactElement;
};

export type SelectOption = {
  value: string;
  ctx: string;
  element: ReactElement;
};

export function Select({
  value = '',
  color = 'dark',
  placeholder = 'Choose ...',
  title,
  children,
  onSelected,
}: SelectProps) {
  const [filter, setFilter] = useState<string>('');
  const [popup, setPopup] = useState<boolean>(false);
  const [options, setOptions] = useState<SelectOption[]>([]);
  const [curr, setCurr] = useState<SelectOption | undefined>(undefined);

  useEffect(() => {
    React.Children.forEach(children, (element) => {
      if (element.type === Option) {
        const opt = { value: element.props.value, element, ctx: extractText(element) };
        setOptions((list) => [...list, opt]);

        if (opt.value === value) {
          setCurr(opt);
        }
      }
    });
  }, []);

  const changeHandler = (opt: SelectOption) => {
    setCurr(opt);
    setPopup(false);
    if (onSelected) {
      onSelected(opt.value);
    }
  };

  return (
    <div className={style[`selectColor-${color}`] || style.selectColor}>
      <div className={style.selectGroup}>
        {title === undefined ? undefined : <label>{title}</label>}
        <div onClick={() => setPopup(true)}>{curr?.element || placeholder}</div>
        {!popup ? undefined : (
          <div className={style.selectPopup} onMouseLeave={() => setPopup(false)}>
            {options.length < 10 ? undefined : (
              <div className={style['selectPopup--search']}>
                <input placeholder={'...'} value={filter} onChange={(e) => setFilter(e.currentTarget.value)} />
              </div>
            )}
            <div className={style['selectPopup--list']}>
              {options
                .filter((item) => filter.length === 0 || item.ctx.indexOf(filter) > 0)
                .map((item) => (
                  <div key={item.value} className={style['selectPopup--list-item']} onClick={() => changeHandler(item)}>
                    {item.element}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
