"use client";
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { Bell } from 'lucide-react';
import Image from 'next/image';

const MainLayout = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="flex h-screen bg-gray-100">

                {/* Desktop Sidebar */}
                <div className="hidden md:flex">
                    <Sidebar />
                </div>

                {/* Mobile Sidebar */}
                {open && (
                    <div className="fixed inset-0 z-40 flex md:hidden">
                        <div className="w-64 bg-white">
                            <Sidebar close={() => setOpen(false)} />
                        </div>
                        <div
                            className="flex-1 bg-black/50"
                            onClick={() => setOpen(false)}
                        />
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col flex-1">
                    <Topbar toggle={() => setOpen(true)} />
                    <main className="flex-1 overflow-y-auto">

                        <div className="hidden bg-[#FFFFFF] px-4 py-4 border-l border-gray-200 md:flex justify-between items-center">
                            <div>
                                <h3 className="text-[16px] font-semibold">Good Afternoon Asif</h3>
                                <p className="text-[14px]">13 June, 2026</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Bell />
                                <h3>|</h3>
                                <di>
                                    <h3 className="font-semibold">Asif Riaj</h3>
                                    <p className="text-end">Hr</p>
                                </di>
                                <Image src="/github-logo.jpeg" height={48} width={48} alt='Profile' className='rounded-full' />
                            </div>
                        </div>

                        <div className="p-4">
                            {children}
                        </div>

                        
                    </main>
                </div>

            </div>
        </div>
    );
};

export default MainLayout;