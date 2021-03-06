import React from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';

import css from './style.module.css';

const propTypes = {
    children: oneOfType([
        arrayOf(node),
        node,
    ]),
};

export const Header = ({ children }) => (
    <header className={css.header}>
        {children}
    </header>
);

Header.propTypes = propTypes;
