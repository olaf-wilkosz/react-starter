import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (<i className={`${props.prefix} fa-${props.name}`}></i>);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  prefix: PropTypes.string,
};

Icon.defaultProps = {
  prefix: 'fas',
};

export default Icon;
