import React from 'react';
import T from 'prop-types';

import '../index.css'

export const Text = ({children,size}) => <div className="text" style={{fontSize:size}}>{children}</div>;

Text.propTypes= {
    size: T.string,
    children: T.oneOfType([T.node, T.string, T.arrayOf(T.node)])
};
