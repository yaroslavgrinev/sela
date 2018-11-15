import React, { Component } from 'react';
import { arrayOf, bool, object, func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Header,
  LeafletMap,
  Page,
  Cards,
  FilterPanel,
  Footer,
} from '../../components';

import HeaderContent from './HeaderContent';
import connectHOC from './connect';

import css from './style.module.css';

const tileLayer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileAttribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const mapCenter = [56.9369013,24.0812393];
const zoomLevel = 15;

const markers = [
  { coords: [56.9369013,24.0812393], caption: 'Some place' },
];

const propTypes = {
  isLoading: bool.isRequired,
  projects: arrayOf(object),
  load: func.isRequired,
};

class App extends Component {
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
      console.log(props.projects, state.projects)
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

App.propTypes = propTypes;

export default connectHOC(App);
