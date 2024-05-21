"use client";

import React from 'react';
import PropTypes from 'prop-types';

const HpButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full py-2 px-4 bg-hpDarkBlue text-white font-semibold rounded-lg hover:bg-hpDarkBlue focus:outline-none focus:ring-2 focus:ring-hpDarkBlue focus:ring-opacity-50"
    >
      {text}
    </button>
  );
};

HpButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HpButton;
