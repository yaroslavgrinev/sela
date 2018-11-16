import React, { Component } from 'react';
import { arrayOf, bool, object, func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  tileLayer,
  tileAttribution,
  mapCenter,
  zoomLevel,
  markers
} from '../../constants/map';

import {
  Header,
  LeafletMap,
  Page,
  Cards,
  FilterPanel,
  Footer,
  HeaderContent,
} from '../../components';

import connectHOC from './connect';

import css from './style.module.css';



const propTypes = {
  isLoading: bool.isRequired,
  projects: arrayOf(object),
  load: func.isRequired,
};

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: null,
      filterValue: null,
      projects: [],
    };

    this.projectsContainer = React.createRef();
  }

  handleScrollToProjects = () => {
    this.projectsContainer.current.scrollIntoView({
      behavior: 'smooth'
    });
  }

  handleFilter = (fName) => () => {
    let filterValue = this.state.filterValue;

    if (this.state.activeFilter === fName) {
      this.setState({
        filterValue: filterValue === 'down' ? 'up' : 'down',
      });
      return;
    }

    this.setState({
      activeFilter: fName,
      filterValue: 'down',
    });
  }

  componentDidMount() {
    this.props.load();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.projects.length !== state.projects.length) {
      return { projects: props.projects };
    }

    return null;
  }

  render() {
    return (
      <div className={css.app}>
        <Header>
          <HeaderContent onScroll={this.handleScrollToProjects} />
        </Header>
        <LeafletMap
          tileLayer={tileLayer}
          tileAttribution={tileAttribution}
          mapCenter={mapCenter}
          zoomLevel={zoomLevel}
          currentLocation="Ikorodu, Lagos"
          markers={markers}
        />
        <Page ref={this.projectsContainer}>
          <FilterPanel
            activeFilter={this.state.activeFilter}
            filterValue={this.state.filterValue}
            onFilter={this.handleFilter}
          />
          {
            this.props.isLoading
             ? <FontAwesomeIcon className={css.loader} icon="spinner" spin />
             : <Cards cards={this.state.projects} />
          }
        </Page>
        <Footer />
      </div>
    );
  }
}

AppContainer.propTypes = propTypes;

export const App = connectHOC(AppContainer);
