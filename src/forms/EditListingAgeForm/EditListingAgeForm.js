import React,{useState} from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import classNames from 'classnames';
import {
  intlShape,
  injectIntl,
  FormattedMessage,
} from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { required } from '../../util/validators';
import { Form, Button, FieldSelect, FieldTextInput } from '../../components';

// Create this file using EditListingFeaturesForm.module.css
// as a template.
import css from './EditListingAgeForm.module.css';

 const EditListingAgeFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {

      const {
        className,
        disabled,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateError,
        updateInProgress,
        ageOptions,
      } = formRenderProps;
      console.log(123,ageOptions)
      const agePlaceholder = intl.formatMessage({
        id: 'EditListingAgeForm.agePlaceholder',
      });

      const errorMessage = updateError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingAgeForm.updateFailed" />
        </p>
      ) : null;

      const ageRequired = required(
        intl.formatMessage({
          id: 'EditListingAgeForm.ageRequired',
        })
      );

      const classes = classNames(css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      // const [value, setvalue] = useState(ageOptions.value)

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
        {/* <input
             id="age"
             name="age"
            type="range"
            min={ageOptions.min}
            max={ageOptions.max}
            // value={value} 
            // // onChange={(e) => setvalue(e.target.value)}
        />
        <h5>Age :- {value}</h5> */}
          <FieldTextInput
            id="age"
            name="age"
            className={css.description}
            type="number"
          />


          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingAgeFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

EditListingAgeFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,
  ageOptions: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ).isRequired,
};

export default compose(injectIntl)(EditListingAgeFormComponent);