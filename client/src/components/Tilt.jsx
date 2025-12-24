import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Tilt = ({ options, className, children, ...rest }) => {
    const tiltRef = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tiltRef.current, options);
    }, [options]);

    return <div ref={tiltRef} className={className} {...rest}>{children}</div>;
}

export default Tilt;
