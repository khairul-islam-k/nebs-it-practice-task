"use client";
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { CheckCircle } from 'lucide-react';
import React from 'react';

const SuccessModal = ({ open, onClose }) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-md rounded-2xl p-8 text-center">

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="text-green-600 w-10 h-10" />
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
                    <Button className="" onClick={onClose}>
                        Close
                    </Button>

                    <Button className="">
                        View Notice
                    </Button>

                    <Button className="bg-[#F95524] hover:bg-amber-500">
                        + Create Another
                    </Button>
                </div>

            </DialogContent>
        </Dialog>

    );
};

export default SuccessModal;