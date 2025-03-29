"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import PDFUploader from "@/app/webviewer/PDFUploader";

export default function HomePage() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const file = acceptedFiles[0];
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);

      setPdfUrl(URL.createObjectURL(file));
    },
    [pdfUrl]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
  });

  return (
    <div className="min-h-screen flex flex-col items-center 
    justify-center bg-green-600 p-6">
      <div
        {...getRootProps()}
        className="mb-4 p-6 border-2 border-dashed border-gray-300
         rounded cursor-pointer w-full max-w-md text-center bg-white"
      >
        <input {...getInputProps()} />
        <p className="text-gray-700">
          {isDragActive
            ? "Drop the PDF here..."
            : "Drag & drop a PDF here, or click to select a file"}
        </p>
      </div>
      {pdfUrl && <PDFUploader initialDoc={pdfUrl} />}
    </div>
  );
}
