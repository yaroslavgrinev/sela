import React from 'react';
import { func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import css from './style.module.css';

const propTypes = {
  onScroll: func.isRequired,
};

const HeaderContent = ({ onScroll }) => (
  <div className={css.shadowCurtain}>
    <div className={css.logoBox}>Sela</div>
    <h2 className={css.shortDescription}>
        Keep track of development projects near you
    </h2>
    <p className={css.longDescription}>
        The Sela Platform enables stakeholders share real time information on the
        state of infrastructure projects to ensure transparent delivery
    </p>
    <div className={css.seeProjectsBtn} onClick={onScroll}>
        <span>See Projects</span>
        <FontAwesomeIcon icon="chevron-down" />
    </div>
  </div>
);

HeaderContent.propTypes = propTypes;

export default HeaderContent;
