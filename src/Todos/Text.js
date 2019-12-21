import React from 'react';
import T from 'prop-types';

import '../index.css'

export const Text = ({children,size, onClick,...props }) => {
  return (
      <div className="text" {...{onClick}} style={{fontSize:size, ...props}} >
          {children}
       </div>
  ) ;
};
Text.propTypes= {
    size: T.string,
    onClick: T.func,
    children: T.oneOfType([T.node, T.string, T.arrayOf(T.node)])
};
Text.defaultProps = {
    size: '14px',
    onClick: () => null,
    
};