"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter();
    return (
        <Button onClick={() => router.back()} className="bg-gray-200 text-gray-500 border border-gray-500 hover:bg-gray-300 cursor-pointer"><ChevronLeft size={30} />
        </Button>
    );
};

export default BackButton;