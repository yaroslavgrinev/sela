import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import css from './style.module.css';

const propTypes = {
  text: string.isRequired,
  className: string.isRequired,
};

const Badge = ({
  text,
  color,
  className
}) => (
  <div className={classNames({
    [css.badge]: true,
    [css[color]]: !!color,
    [className]: !!className
  })}>
    {text}
  </div>
);

Badge.propTypes = propTypes;

export default Badge;
