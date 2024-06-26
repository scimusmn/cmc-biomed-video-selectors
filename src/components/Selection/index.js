/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';

function Selection(props) {
  const { item, setSelection } = props;

  return (
    <div className="selection-item" onClick={() => setSelection(item)}>
      {item?.thumbnail?.localFile && (
        <div className="image-container">
          <img src={item.thumbnail.localFile.publicURL} alt="thumbnail" />
        </div>
      )}

      <div className="text-wrap">
        {Object.keys(item.titleDisplays).map((locale, i) => {
          const title = item.titleDisplays[locale];
          return (
            <React.Fragment key={i}>
              {i !== 0 && <hr className={`divider ${locale}`} />}
              <h4 className={`selection-title ${locale}`}>{title}</h4>
            </React.Fragment>
          );
        })}
        {Object.keys(item.descriptions).map((locale, i) => {
          const { description } = item.descriptions[locale];
          return (
            <React.Fragment key={i}>
              {i !== 0 && <hr className={`divider ${locale}`} />}
              <h4 className={`selection-description ${locale}`}>{description}</h4>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

Selection.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  setSelection: PropTypes.func.isRequired,
};

export default Selection;
