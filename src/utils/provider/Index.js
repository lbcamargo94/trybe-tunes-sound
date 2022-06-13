import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import tunesContext from '../Context';

export const tunesProvider = ({ children }) => {
  const [data, setData] = useState({
    data: {
      users: [],
    } 
  });

  return (
    <tunesContext.Provider value={ { data, setData } }>
      { children }
    </tunesContext.Provider>
  );
};

export const useUpdateContext = () => useContext(tunesContext);

tunesContext.propTypes = {
  children: PropTypes.element,
}.isRequired;