"use client";
import axios from 'axios';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const DraftTable = () => {
    const [notices, setNotices] = useState([]);

    // Load data
    useEffect(() => {
        axios.get("https://nebs-it-server-six.vercel.app/draft").then((res) => {
            setNotices(res.data);
        });
    }, []);
    return (
        <div className="bg-white mx-auto rounded-xl border w-[340px] md:w-full">
            <div className="overflow-x-auto">
                <table className="min-w-[900px] w-full border-collapse">
                    <thead className="bg-gray-100 text-sm">
                        <tr>
                            <th className="p-3"><input type="checkbox" /></th>
                            <th className="p-3 text-left">Title</th>
                            <th className="p-3 text-left">Notice Type</th>
                            <th className="p-3 text-left">Department / Individual</th>
                            <th className="p-3 text-left">Publish On</th>
                            <th className="p-3 text-left">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {notices.map((notice) => (
                            <tr key={notice._id} className="border-t hover:bg-gray-50">
                                <td className="p-3"><input type="checkbox" /></td>
                                <td className="p-3 font-medium">{notice.title}</td>
                                <td className="p-3">{notice.noticeType}</td>
                                <td className="p-3">{notice.department || "Individual"}</td>
                                <td className="p-3">{notice.publishDate}</td>

                                <td className="p-3">
                                    <span className={`px-3 py-1 text-xs rounded-full font-medium
                    ${notice.status === "Published"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-gray-200 text-gray-700"}
                  `}>
                                        {notice.status}
                                    </span>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default DraftTable;