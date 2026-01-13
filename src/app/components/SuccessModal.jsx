"use client";
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const SuccessModal = ({ open, onClose }) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-md rounded-2xl p-8 text-center">

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <Image src="/success.png" width={96} height={96} alt='success' />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold">Notice Published Successfully</h2>

                {/* Description */}
                <p className="text-gray-500 mt-2">
                    Your notice “Holiday Schedule – November 2025” has been published and is now visible to all selected departments.
                </p>

                {/* Buttons — MUST be inside DialogContent */}
                <div className="mt-8 flex gap-3 justify-center">
                    <Button className="text-[#3B82F6] border border-[#3B82F6] rounded-full bg-white hover:bg-white cursor-pointer">
                        View Notice
                    </Button>

                    <Button onClick={onClose}
                     className="text-[#F95524] border border-[#F95524] rounded-full bg-white hover:bg-white cursor-pointer">
                        + Create Another
                    </Button>

                    <Button className="text-[#232948] border border-[#232948] rounded-full bg-white hover:bg-white cursor-pointer" onClick={onClose}>
                        Close
                    </Button>
                </div>

            </DialogContent>
        </Dialog>

    );
};

export default SuccessModal;