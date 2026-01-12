import { Spinner } from '@/components/ui/spinner';
import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Spinner className="size-8" />
        </div>
    );
};

export default Loader;