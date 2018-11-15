import React from 'react';
import { string, arrayOf, shape } from 'prop-types';

import css from './style.module.css';

const propTypes = {
  contractors: arrayOf(shape({
    avatar: string.isRequired,
    name: string.isRequired,
  })),
};

const Contractors = ({ contractors }) => (
  <div className={css.contractors}>
    <span>Contractors</span>
    <ul>
      {
        contractors.map(({ avatar, name}) => (
          <li key={avatar}>
            <img src={avatar} alt={name} />
          </li>
        ))
      }
    </ul>
  </div>
);

Contractors.propTypes = propTypes;

export default Contractors;
