import { useState } from "react";
import { MoreVertical } from "lucide-react";

export function ActionMenu({ status, onToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded hover:bg-gray-200"
      >
        <MoreVertical size={18} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-3 z-50">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              {status === "Published" ? "Unpublish" : "Publish"}
            </span>

            {/* Toggle Switch */}
            <button
              onClick={() => {
                onToggle();
                setOpen(false);
              }}
              className={`w-11 h-6 flex items-center rounded-full px-1 transition
                ${status === "Published" ? "bg-green-500" : "bg-gray-300"}
              `}
            >
              <span
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition
                  ${status === "Published" ? "translate-x-5" : "translate-x-0"}
                `}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
