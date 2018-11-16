import React from 'react';
import { arrayOf, number,string, shape } from 'prop-types';

import css from './style.module.css';

import Card from './Card';

const propTypes = {
  cards: arrayOf(shape({
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
  })),
};

export const Cards = ({ cards }) => (
  <ul className={css.cards}>
    {
      cards.map((card) => (
        <Card key={card.id} {...card} />
      ))
    }
  </ul>
);

Cards.propTypes = propTypes;
