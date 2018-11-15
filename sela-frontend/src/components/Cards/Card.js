import React from 'react';
import { string, number, arrayOf, shape } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import numeral from 'numeral';

import { Divider, Badge, ProgressBar } from '../';
import { statusTextMatch, statusColorMatch } from '../../constants/badge';
import Contractors from './Contractors';

import css from './style.module.css';

const propTypes = {
  title: string.isRequired,
  logo: string.isRequired,
  status: string.isRequired,
  description: string.isRequired,
  location: string.isRequired,
  budget: number.isRequired,
  gained: number.isRequired,
  contractors: arrayOf(shape({
    avatar: string.isRequired,
    name: string.isRequired,
  })).isRequired,
};

const Card = ({
  title,
  logo,
  status,
  description,
  location,
  budget,
  gained,
  contractors,
}) => {
  const progress = Math.floor((gained / budget) * 100);

  return (
    <li className={css.card}>
      <div className={css.logo}>
        <img src={logo} alt={title} />
        <Badge
          text={statusTextMatch[status]}
          color={statusColorMatch[status]}
          className={css.status}
        />
        <ProgressBar
          className={css.progressBar}
          completed={progress}
        />
      </div>
      <div className={css.info}>
        <h2>{title}</h2>
        <div className={css.goal}>
          <div className={css.goalItem}>
            <FontAwesomeIcon icon="map-marker-alt" />
            <span>{location}</span>
          </div>
          <div className={css.goalItem}>
            <FontAwesomeIcon icon="money-bill-wave" />
            <span>Budget: ${numeral(budget).format('0,0')}</span>
          </div>
        </div>
        <p className={css.description}>
          {description}...
          <a href="/" className={css.readMoreLink}>Read more</a> 
        </p>
        <Divider />
        <Contractors contractors={contractors} />
        <a href="/" className={css.showDetailsLink}>
          View more details
          <FontAwesomeIcon icon="chevron-right" />
        </a>
      </div>
    </li>
  );
};

Card.propTypes = propTypes;

export default Card;
