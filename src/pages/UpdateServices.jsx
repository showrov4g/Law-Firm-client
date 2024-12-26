import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateServices = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1>this is update page</h1>
        </div>
    );
};

export default UpdateServices;