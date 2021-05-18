import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-hooghly',
    predictionPlace: {
      address: 'Hooghly, West Bengal',
      bounds: new LatLngBounds(new LatLng(23.0931, 88.4426), new LatLng(22.8076, 88.0737)),
    },
  },
];
export default defaultLocations;
