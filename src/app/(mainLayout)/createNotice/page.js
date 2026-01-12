import React from 'react';
import BackButton from './components/BackButton';
import CreateForm from './components/CreateForm';

const createNotice = () => {
    return (
        <div>
            <div className="flex items-center gap-3 mb-4">
                <BackButton></BackButton>
                <h3 className="text-xl font-medium">Create a Notice</h3>
            </div>

            <CreateForm></CreateForm>
        </div>
    );
};

export default createNotice;