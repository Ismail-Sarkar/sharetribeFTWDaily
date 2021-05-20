import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';

import css from './ListingPage.module.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionAge = props => {
  const { publicData } = props;
  const age=publicData.age
  return age ? (
    <div className={css.sectionAge}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.ageTitle" />
      </h2>
      <p className={css.age}>
        {richText(age, {
          longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
          longWordClass: css.longWord,
        })}
      </p>
    </div>
    // <h5>{age}</h5>
  ) : null;
};

export default SectionAge;