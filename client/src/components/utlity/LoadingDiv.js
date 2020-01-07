import React, { Fragment } from 'react';
import BouncerLoading from './loading/BouncerLoading';
import SpinnerLoading from './loading/SpinnerLoading';
import PulserLoading from './loading/PulserLoading';

const LoadingDiv = ({ loaderType }) => {
    const getLoaderType = () => {
        switch (loaderType) {
            case 'bouncer':
                return <BouncerLoading />;
            case 'spinner':
                return <SpinnerLoading />;
            case 'pulser':
                return <PulserLoading />;
            default:
                return <BouncerLoading />;
        }
    };

    return getLoaderType();
};

export default LoadingDiv;
