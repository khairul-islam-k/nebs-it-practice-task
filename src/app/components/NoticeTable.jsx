"use client";
import axios from "axios";
import { Eye, Pencil, MoreVertical, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ActionMenu } from "./ActionMenu";
import Link from "next/link";

export default function NoticeTable() {
  const [notices, setNotices] = useState([]);

  // pagination
  const [filtered, setFiltered] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

  // Load data
  useEffect(() => {
    axios.get("https://nebs-it-server-six.vercel.app/notices").then((res) => {
      setNotices(res.data);
    });
  }, []);

  // Toggle Publish / Unpublish
  const toggleStatus = async (id) => {
    const current = filtered.find(n => n._id === id);
    const newStatus =
      current.status === "Published" ? "Unpublished" : "Published";

    // Update UI instantly
    setFiltered(prev =>
      prev.map(n =>
        n._id === id ? { ...n, status: newStatus } : n
      )
    );

    try {
      await axios.patch(`https://nebs-it-server-six.vercel.app/notices/${id}`, {
        status: newStatus,
      });
    } catch (error) {
      alert("Update failed");

      // Revert UI if server fails
      setFiltered(prev =>
        prev.map(n =>
          n._id === id ? { ...n, status: current.status } : n
        )
      );
    }
  };

  // pagination
  const itemsPerPage = 6;
  const totalItems = notices.length;
  const numberOfPage = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(numberOfPage).keys()];

  const handlePrev = () => {
    if (0 < currentPage) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    axios.get(`https://nebs-it-server-six.vercel.app/notice6?page=${currentPage}&size=${itemsPerPage}`)
      .then(res => setFiltered(res.data))
      .catch(error => console.log(error))
  }, [currentPage, itemsPerPage])


  return (
    <div>
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
              {filtered.map((notice) => (
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
                        <Link href={`/${notice._id}`} >
                          <Eye size={18} />
                        </Link>
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

      {/* pagination */}
      <div className='text-center'>
        <p>{currentPage}</p>
        <button
          onClick={handlePrev}
          className='border px-4 py-2 rounded-lg mr-2 cursor-pointer'>
            <ArrowLeft /></button>
        {
          pages.map(page => <button
            onClick={() => setCurrentPage(page)}
            className={`bg-base-200 px-4 py-2 mr-2 border rounded-lg ${currentPage === page && 'select'}`}
            key={page}>{page}</button>)
        }
        <button
          onClick={handleNext}
          className='border px-4 py-2 rounded-lg cursor-pointer'>
            <ArrowRight />
          </button>
      </div>


    </div>
  );
}
