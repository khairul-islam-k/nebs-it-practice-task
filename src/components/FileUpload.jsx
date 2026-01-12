"use client";

import { useRef, useState } from "react";
import { UploadCloud, FileText, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Swal from "sweetalert2";

export default function FileUpload({setPhotoUrl, setIsLoading}) {
    const inputRef = useRef(null);
    const [file, setFile] = useState(null);

    const handleSelect = async (e) => {
        setIsLoading(true);
        const selected = e.target.files[0];
        if (selected.type !== "image/jpeg" && selected.type !== "image/png") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can use only png and jpg image",
                footer: '<a href="#">Why do I have this issue?</a>'
            });

            return;
        }
        setFile(selected);
        const formData = new FormData();
        formData.append("image", selected);

        const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_KEY}`;

        const res = await axios.post(imageUploadUrl, formData);
        const photo = res.data.data.url;

        setPhotoUrl(photo);
        setIsLoading(false);
    };

    const handleDrop = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const dropped = e.dataTransfer.files[0];
        if (dropped.type !== "image/jpeg" && dropped.type !== "image/png") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can use only png and jpg image",
                footer: '<a href="#">Why do I have this issue?</a>'
            });

            return;
        }
        setFile(dropped);
        const formData = new FormData();
        formData.append("image", dropped);

        const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_KEY}`;

        const res = await axios.post(imageUploadUrl, formData);
        const photo = res.data.data.url;

        setPhotoUrl(photo);
        setIsLoading(false);
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
