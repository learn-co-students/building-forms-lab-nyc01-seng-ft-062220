import React from 'react'

const Band = props => {
    console.log("BAND:", props)
  return (
    <li>{props.band}</li>
  );
};

export default Band;
