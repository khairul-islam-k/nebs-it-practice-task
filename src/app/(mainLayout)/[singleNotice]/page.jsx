"use client";
import axios from "axios";
import { ArrowLeft, Calendar, User, Briefcase, Building2, Tag } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SingleNotice() {
  const [notice, setNotice] = useState({});
  console.log(notice);
  const router = useRouter();
  const {singleNotice} = useParams();

  useEffect(() => {
    axios.get(`https://nebs-it-server-six.vercel.app/notices/${singleNotice}`)
    .then(res => setNotice(res.data));
  },[singleNotice])

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow border p-6">

      {/* Header */}
      <div className="flex justify-between items-start border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold">{notice.title}</h1>
          <p className="text-sm text-gray-500 mt-1">
            Notice ID: {notice._id}
          </p>
        </div>

        <span
          className={`px-4 py-1 rounded-full text-sm font-semibold
            ${
              notice.status === "Published"
                ? "bg-green-100 text-green-700"
                : "bg-gray-200 text-gray-700"
            }
          `}
        >
          {notice.status}
        </span>
      </div>

      {/* Meta Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-sm">

        <div className="flex gap-3 items-center">
          <User className="text-gray-400" size={18} />
          <div>
            <p className="text-gray-500">Employee</p>
            <p className="font-medium">
              {notice.employeeName} ({notice.employeeId})
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Briefcase className="text-gray-400" size={18} />
          <div>
            <p className="text-gray-500">Position</p>
            <p className="font-medium">{notice.employeePosition}</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Building2 className="text-gray-400" size={18} />
          <div>
            <p className="text-gray-500">Department</p>
            <p className="font-medium capitalize">{notice.department}</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Calendar className="text-gray-400" size={18} />
          <div>
            <p className="text-gray-500">Published On</p>
            <p className="font-medium">{notice.publishDate}</p>
          </div>
        </div>

      </div>

      {/* Notice Type */}
      <div className="mt-6">
        <p className="text-gray-500 mb-2">Notice Type</p>
        <div className="flex flex-wrap gap-2">
          {notice?.noticeType?.map((type) => (
            <span
              key={type}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full flex items-center gap-1"
            >
              <Tag size={12} />
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="mt-8">
        <p className="text-gray-500 mb-2">Notice Details</p>
        <div className="border rounded-lg p-4 bg-gray-50 whitespace-pre-wrap leading-relaxed">
          {notice.body}
        </div>
      </div>

      {/* Attachment */}
      {notice.photoUrl && (
        <div className="mt-8">
          <p className="text-gray-500 mb-2">Attachment</p>
          <img
            src={notice.photoUrl}
            alt="Notice Attachment"
            className="max-w-md rounded-lg border"
          />
        </div>
      )}

      {/* Footer */}
      <div className="mt-10 flex justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-black"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          onClick={() => window.print()}
          className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Print
        </button>
      </div>

    </div>
  );
}
