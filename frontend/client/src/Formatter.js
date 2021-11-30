import React from 'react';
import NumberFormat from 'react-number-format';

const Formatter = ({ value }) => {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      fixedDecimalScale={true}
      decimalScale={2}
      prefix={'€'}
      renderText={(formattedValue) => <div>{formattedValue}</div>}
    />
  );
};

export default Formatter;
