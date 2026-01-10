"use client";
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

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
                    <main className="flex-1 p-4 overflow-y-auto">
                        {children}
                    </main>
                </div>

            </div>
        </div>
    );
};

export default MainLayout;