import React from 'react';
import L from 'leaflet';
import {createControlComponent} from '@react-leaflet/core';
import PropTypes from 'prop-types';
import 'leaflet-routing-machine';

const createRoutineMachineLayer = ({points}) => L.Routing.control({
  waypoints: [
    L.latLng(points.loadingPoint.latitude, points.loadingPoint.longitude),
    L.latLng(points.unloadingPoint.latitude, points.unloadingPoint.longitude)
  ],
  lineOptions: {
    styles: [{color: '#6FA1EC', weight: 4}]
  },
  show: false,
  addWaypoints: false,
  routeWhileDragging: false,
  draggableWaypoints: false,
  fitSelectedRoutes: true,
  showAlternatives: false,
});


const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;

createRoutineMachineLayer.propTypes = {
  points: PropTypes.object
};
