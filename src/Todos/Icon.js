import React from 'react';
import { iconConfig } from './iconConfig';
import T from 'prop-types';

export const Icon = ({name, ...props}) => {
    const IconC = iconConfig[name];
    return <IconC {...props} />
}

Icon.propTypes = {
    name: T.string.isRequired,
    size: T.string,
    color: T.string
};

Icon.defaultProps = {
    size: "14px",
    color: "#000"
};