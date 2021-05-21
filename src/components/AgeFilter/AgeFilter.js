import React from 'react';
import { bool } from 'prop-types';
import FilterPlain from '../FilterPlain/FilterPlain';
import FilterPopup from '../FilterPopup/FilterPopup';
import FieldTextInput from '../FieldTextInput/FieldTextInput';
// import SelectSingleFilterPlain from './SelectSingleFilterPlain';
// import SelectSingleFilterPopup from './SelectSingleFilterPopup';

const AgeFilter = props => {
  const { showAsPopup, ...rest } = props;
//   console.log("Ageprop",props)
  return showAsPopup ? (
    // <SelectSingleFilterPopup {...rest} />
    <FilterPopup children={<FieldTextInput  id="pub_age"
    name="pub_age"
    type="number"/>}{...rest} />
  ) : (
    // <SelectSingleFilterPlain {...rest} />
    <FilterPlain {...rest} />
  );
};

AgeFilter.defaultProps = {
  showAsPopup: false,
};

AgeFilter.propTypes = {
  showAsPopup: bool,
};

export default AgeFilter;