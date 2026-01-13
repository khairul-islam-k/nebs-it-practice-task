import React from 'react';
import BackButton from '../createNotice/components/BackButton';
import DraftTable from './components/DraftTable';

const Draft = () => {
    return (
        <div>
            <div className="flex items-center gap-3 mb-4">
                <BackButton></BackButton>
                <h3 className="text-xl font-medium">Create a Notice</h3>
            </div>
            <DraftTable></DraftTable>
        </div>
    );
};

export default Draft;