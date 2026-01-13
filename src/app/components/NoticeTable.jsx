"use client";
import axios from "axios";
import { Eye, Pencil, MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { ActionMenu } from "./ActionMenu";

export default function NoticeTable() {
  const [notices, setNotices] = useState([]);

  // Load data
  useEffect(() => {
    axios.get("http://localhost:5000/notices").then((res) => {
      setNotices(res.data);
    });
  }, []);

  // Toggle Publish / Unpublish
  const toggleStatus = (id) => {
    setNotices((prev) =>
      prev.map((n) =>
        n._id === id
          ? {
              ...n,
              status: n.status === "Published" ? "Unpublished" : "Published",
            }
          : n
      )
    );


    const singleNotice =  notices.find(notice => notice._id = id);
    const newNotice = singleNotice?.status === "Published" ? "Unpublished" : "Published";
    console.log(newNotice);

    // (Optional API call)
    axios.patch(`http://localhost:5000/notices/${id}`, { status: newNotice });
  };

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
              <th className="p-3 text-right">Action</th>
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

                <td className="p-3 text-right">
                  <div className="flex justify-end gap-2 items-center">
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Eye size={18} />
                    </button>

                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Pencil size={18} />
                    </button>

                    <ActionMenu
                      status={notice.status}
                      onToggle={() => toggleStatus(notice._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
