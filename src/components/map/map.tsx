import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

import { MapModel } from './types';

const Map: React.FC<MapModel> = ({ defaultCenter }) => {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={defaultCenter}>
      <Marker position={defaultCenter} />
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
