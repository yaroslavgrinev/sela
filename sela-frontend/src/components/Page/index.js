import React from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';

import css from './style.module.css';

const propTypes = {
  children: oneOfType([
      arrayOf(node),
      node,
  ]),
};

const Page = React.forwardRef(({ children }, ref) => (
  <main ref={ref} className={css.page}>
      {children}
  </main>
));

Page.propTypes = propTypes;

export default Page;
