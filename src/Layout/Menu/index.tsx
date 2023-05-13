import React, { ReactElement } from 'react';
import { ColorsShort } from '../../_core';
import style from './index.module.scss';

// -----------------------------------------------------------------

export type MenuLinkProps = {
  to: string;
  icon?: string;
  children: ReactElement;
};

export function MenuLink({ to, children }: MenuLinkProps) {
  return (
    <div className={style.menuLink}>
      <a href={to}>{children}</a>
    </div>
  );
}

export function MenuDivider() {
  return (
    <div className={style.menuDivider}>
      <hr />
    </div>
  );
}

// -----------------------------------------------------------------

export type MenuHeaderProps = {
  children: ReactElement;
};

export function MenuHeader({ children }: MenuHeaderProps) {
  return <div className={style.menuHeader}>{children}</div>;
}

// -----------------------------------------------------------------

export type MenuFooterProps = {
  children: ReactElement;
};

export function MenuFooter({ children }: MenuFooterProps) {
  return <div className={style.menuFooter}>{children}</div>;
}

// -----------------------------------------------------------------

export type MenuBodyProps = {
  children: ReactElement;
};

export function MenuBody({ children }: MenuBodyProps) {
  return <div className={style.menuBody}>{children}</div>;
}

// -----------------------------------------------------------------

export type MenuProps = {
  color?: ColorsShort;
  children: ReactElement;
};

export function Menu({ color = 'secondary', children }: MenuProps) {
  // const [filter, setFilter] = useState<string>('');
  // const [popup, setPopup] = useState<boolean>(false);
  // const [options, setOptions] = useState<SelectOption[]>([]);
  // const [curr, setCurr] = useState<SelectOption | undefined>(undefined);
  //
  // useEffect(() => {
  //   React.Children.forEach(children, (element) => {
  //     if (element.type === Option) {
  //       const opt = { value: element.props.value, element, ctx: extractText(element) };
  //       setOptions((list) => [...list, opt]);
  //
  //       if (opt.value === value) {
  //         setCurr(opt);
  //       }
  //     }
  //   });
  // }, []);
  //
  // const changeHandler = (opt : SelectOption) => {
  //   setCurr(opt);
  //   setPopup(false);
  //   if (onSelected) {
  //     onSelected(opt.value);
  //   }
  // };

  return (
    <div className={style[`menuColor-${color}`] || style.menuColor}>
      <div className={style.menu}>{children}</div>
    </div>
  );
}
