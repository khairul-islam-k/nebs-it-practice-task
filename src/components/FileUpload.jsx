"use client";

import { useRef, useState } from "react";
import { UploadCloud, FileText, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FileUpload() {
    const inputRef = useRef(null);
    const [file, setFile] = useState(null);
    console.log(file)

    const handleSelect = (e) => {
        const selected = e.target.files[0];
        if (selected) setFile(selected);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const dropped = e.dataTransfer.files[0];
        if (dropped) setFile(dropped);
    };

    return (
        <div>
            <div
                onClick={() => inputRef.current.click()}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 transition bg-white"
            >
                <UploadCloud className="text-[#10B981]" />

                <p className="text-lg font-semibold">
                    <span className="text-[#10B981]">Upload</span> nominee profile image or drag and drop.
                </p>

                <p className=" text-gray-500 mt-1">
                    Accepted File Type: jpg, png
                </p>

                <input
                    type="file"
                    ref={inputRef}
                    hidden
                    onChange={handleSelect}
                />

                {/* {file && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                        <FileText size={16} />
                        {file.name}
                    </div>
                )} */}

                {/* <Button className="mt-6">Submit File</Button> */}
            </div>

            <div className="flex items-center gap-4 my-5">
                <Paperclip />
                <p className="text-lg font-semibold">
                    {file ? file.name : "Upload your file"}
                </p>
            </div>

        </div>
    );
}
