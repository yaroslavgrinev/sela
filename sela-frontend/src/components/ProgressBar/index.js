import React from 'react';
import { string, number } from 'prop-types';
import classNames from 'classnames';

import css from './style.module.css';

const propTypes = {
  completed: number.isRequired,
  className: string.isRequired,
};

export const ProgressBar = ({
  completed,
  className
}) => (
  <div
    className={classNames({
      [css.progressBarContainer]: true,
      [className]: !!className
    })}
  >
    <div className={css.bar}>
        {completed}% complete
    </div>
    <div
      className={classNames({
        [css.bar]: true,
        [css.topBar]: true,
      })}
      style={{
        width: `${completed}%`
      }}
    >
        <div className={css.contentText}>
        {completed}% complete
        </div>
    </div>
  </div>
);

ProgressBar.propTypes = propTypes;

