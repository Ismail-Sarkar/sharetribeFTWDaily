import React from 'react';
import { array, shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import css from './ListingPage.module.css';

const SectionCapacity = props => {
  const { publicData, options } = props;

  const capacity = publicData.capacity;
  const capacityOption = options.find(
    option => option.key === capacity
  );

  return capacityOption ? (
    <div className={css.sectionCapacity}>
        {/* <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.ageTitle" />
       </h2> */}
       <h2 className={css.desCriptionTitle}>Capacity</h2>
       <p className={css.capacity}>{capacityOption.label}</p>

      {/* <h2 className={css.capacityTitle}>
        <FormattedMessage id="ListingPage.capacityTitle" />
      </h2> */}
      {/* <p className={css.capacity}>{capacityOption.label}</p> */}
    </div>


    // <div className={css.sectionAge}>
    //   <h2 className={css.descriptionTitle}>
    //     <FormattedMessage id="ListingPage.ageTitle" />
    //   </h2>
    //   <p className={css.age}>
    //     {richText(age, {
    //       longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
    //       longWordClass: css.longWord,
    //     })}
    //   </p>
    // </div>
    // <h1>Hello</h1>
  ) : null;
};

SectionCapacity.propTypes = {
  options: array.isRequired,
  publicData: shape({
    capacity: string,
  }).isRequired,
};

export default SectionCapacity;