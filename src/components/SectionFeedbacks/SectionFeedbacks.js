import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionFeedbacks.css';


import drunkenSailor from './images/drunken_sailor.jpg';
import indianSailor from './images/indian_sailor.jpg';
import sgSailor from './images/sg_sailor.jpg';





class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
      <p>
          {/* <FormattedMessage id="SectionHowItWorks.part3Text" /> */}
          
          <FormattedMessage 
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }} />
      </p>
        {/* <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        /> */}
      </div>
    </NamedLink>
  );
};

const SectionFeedbacks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionFeedbacks.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Not only a great website, but real, friendly people that guide you step by step to reach the best deal',
          drunkenSailor,
          '?address=Singapore&bounds=1.47792089869855%2C104.406654862095%2C1.13085662018305%2C103.574203823519'
        )}
        {locationLink(
          'Thanks to your support during the charter week, we had an amazing cruise experience in Tioman Island.',
          indianSailor,
          '?address=Thailand&bounds=20.4649449359772%2C105.636713%2C5.61341513823121%2C97.3435210006002'
        )}
        {locationLink(
          'The experience was amazing from the start, the team was responsive and professional throughout the booking and sailing process.',
          sgSailor,
          '?address=People%27s%20Republic%20of%20China&bounds=53.560711991333%2C134.77281099468%2C18.0608510186141%2C73.4998560298202'
        )}
      </div>
    </div>
  );
};

SectionFeedbacks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionFeedbacks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionFeedbacks;
