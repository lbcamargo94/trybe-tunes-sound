import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TunesContext from '../context';

export const TunesProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <TunesContext.Provider value={ { data, setData } }>
      { children }
    </TunesContext.Provider>
  );
};

export const useUpdateContext = () => useContext(TunesContext);

TunesProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;