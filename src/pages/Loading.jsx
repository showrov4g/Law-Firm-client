import React from 'react';
import { Vortex } from 'react-loader-spinner'
const Loading = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Vortex
        visible={true}
        height="300"
        width="300"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
        </div>
    );
};

export default Loading;