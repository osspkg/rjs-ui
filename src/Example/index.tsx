import React, { Component } from 'react';
import style from './index.module.scss';

interface Props {
  text: string;
}

export default class Example extends Component<Props> {
  render() {
    return (
      <div className={style.test}>Example Component: {this.props.text}</div>
    );
  }
}
