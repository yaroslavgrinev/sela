import React from 'react';
import { func, string } from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { filters } from '../../constants/filters';
import css from './style.module.css';

const propTypes = {
  activeFilter: string,
  filterValue: string,
  onFilter: func.isRequired,
};

const FilterPanel = ({
  activeFilter,
  filterValue,
  onFilter,
}) => (
  <div className={css.filterPanel}>
      <div className={css.caption}>All Projects</div>
      <ul className={css.panel}>
      <li>Sort by:</li>
      {
        filters.map((f) => (
          <li
            className={classNames({
              [css.active]: activeFilter === f.value,
            })}
            key={f.caption}
            onClick={onFilter(f.value)}
          >
              <span>{f.caption}</span>
              {activeFilter === f.value
                ? <FontAwesomeIcon icon={`chevron-${filterValue}`} />
                : null
              }
          </li>
        ))
      }
      </ul>
  </div>
);

FilterPanel.propTypes = propTypes;

export default FilterPanel;
