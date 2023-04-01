import React, { Component } from 'react';
import style from './index.module.scss';

interface Props {
  text: string;
}

export default class Tabs extends Component<Props> {
  render() {
    return (
      <div className={style.test}>Tabs Component: {this.props.text}</div>
    );
  }
}
