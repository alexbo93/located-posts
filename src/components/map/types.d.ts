export type MapModel = {
  defaultCenter: {
    lat: number;
    lng: number;
  };
  onLocationChange?: (latLng: any) => void;
};

export type latLngObject = {
  lat: Function;
  lng: Function;
};
