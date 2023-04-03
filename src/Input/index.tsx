import React, { ChangeEvent, Component } from 'react';
import { ColorsShort } from '../_core';
import style from './index.module.scss';

export type InputType = 'text' | 'password' | 'color' | 'date'
| 'datetime-local' | 'email' | 'number' | 'tel' | 'search';

export type InputProps = {
  title?: string;
  color?: ColorsShort;
  type?: InputType;
  value?: string ;
  onChange?: (arg: string)=>void;
};

export type InputState = {
  value?: string ;
};

export class Input extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = { value: this.props.value || '' };
  }

  changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.currentTarget.value });
    if (this.props.onChange) {
      this.props.onChange(e.currentTarget.value);
    }
  };

  render() {
    const { title, color = 'dark', type = 'text' } = this.props;
    return (
      <div className={style[`inputColor-${color}`] || style.inputColor}>
        <div className={style.inputGroup}>
          {title && title?.length <= 0 ? undefined : (<label>{title}</label>) }
          <input value={this.state.value} type={type}
                 onChange={this.changeHandler} />
        </div>
      </div>
    );
  }
}
