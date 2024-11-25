import React from 'react';
import { Divider } from '@mui/material';
import PropTypes from 'prop-types'; 

const CustomDivider = ({ 
  borderColor = 'gray', 
  borderWidth = '1px', 
  width = '80%', 
  margin = '100px' 
}) => {
  return (
    <Divider
      sx={{
        borderColor: borderColor,
        borderWidth: borderWidth,
        width: width,
        margin: margin,
      }}
    />
  );
};

CustomDivider.propTypes = {
  borderColor: PropTypes.string, 
  borderWidth: PropTypes.string, 
  width: PropTypes.string, 
  margin: PropTypes.string, 
};

export default CustomDivider;
