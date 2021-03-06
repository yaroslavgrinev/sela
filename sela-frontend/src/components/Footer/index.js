import React from 'react';

import {
  Divider
} from '../';

import css from './style.module.css';

const currentYear = new Date().getFullYear();

export const Footer = () => (
  <footer className={css.footer}>
    <Divider />
    <div className={css.sela}>(c) Sela. {currentYear}</div>
  </footer>
);

