import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {MapContainer, TileLayer} from 'react-leaflet'

import {getCoords} from '../../redux/selectors/index.selectors';

import RoutingMachine from './app-routing-machine';

const defaultSettings = {
  position: [55.7522200, 37.6155600],
  zoom: 10
};

const defaultStyles = {
  minWidth: '400px',
  height: '768px',
  backgroundColor: '#9f9e9e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export function AppMap({width}) {
  const points = useSelector(getCoords);

  // useEffect(() => {
  //   console.log('Rerender!');
  //   console.log(points);
  // }, [points]);

  return (
    <div style={{...defaultStyles, width}}>
      <MapContainer
        center={defaultSettings.position}
        zoom={defaultSettings.zoom}
        style={{
          height: defaultStyles.height,
          width
        }}
      >
        <TileLayer
          attribution={`&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors`}
          url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
        />
        {(points.loadingPoint && points.unloadingPoint) && (
          <RoutingMachine points={points}/>
        )}
      </MapContainer>
    </div>
  );
}

AppMap.propTypes = {
  width: PropTypes.number
};
