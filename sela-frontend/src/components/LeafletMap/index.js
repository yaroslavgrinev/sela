import React from 'react';
import { string, arrayOf, number, shape } from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import css from './style.module.css';

const propTypes = {
  tileLayer: string.isRequired,
  tileAttribution: string.isRequired,
  mapCenter: arrayOf(number).isRequired,
  zoomLevel: number.isRequired,
  markers: arrayOf(shape({
    coords: arrayOf(number).isRequired,
    caption: string.isRequired,
  })),
  currentLocation: string.isRequired,
};

const LeafletMap = ({
  tileLayer,
  tileAttribution,
  mapCenter,
  zoomLevel,
  markers,
  currentLocation,
}) => (
  <div className={css.container}>
    <div className={css.searchBar}>
      <div className={css.title}>Search Projects By Location</div>
      <div className={css.location}>
        <FontAwesomeIcon icon="map-marker-alt" />
        <span>{currentLocation}</span>
      </div>
    </div>
    <Map
      center={mapCenter}
      zoom={zoomLevel}
      className={css.map}
    >
      <TileLayer
        attribution={tileAttribution}
        url={tileLayer}
      />
      {
        markers.map(({ coords, caption }) => (
          <Marker position={coords} key={coords}>
            <Popup>{caption}</Popup>
          </Marker>
        ))
      }
    </Map>
  </div>
);

LeafletMap.defaultProps = {
  markers: [],
};
LeafletMap.propTypes = propTypes;

export default LeafletMap;
