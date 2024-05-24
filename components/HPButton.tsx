"use client";

import React from 'react';

interface HpButtonProps {
  text: string;
}

const HpButton: React.FC<HpButtonProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full py-2 px-4 bg-hpDarkBlue text-white font-semibold rounded-lg hover:bg-hpDarkBlue focus:outline-none focus:ring-2 focus:ring-hpDarkBlue focus:ring-opacity-50"
    >
      {text}
    </button>
  );
};

export default HpButton;
