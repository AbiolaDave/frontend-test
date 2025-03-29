"use client";

import { PDFDocument, rgb } from "pdf-lib";
import { useEffect, useRef, useState } from "react";

interface PDFUploaderProps {
  initialDoc: string;
}

export default function PDFUploader({ initialDoc }: PDFUploaderProps) {
  const viewerRef = useRef<any>(null);
  const instanceRef = useRef<any>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!viewerRef.current || instanceRef.current) return;

    import("@pdftron/webviewer")
      .then(({ default: WebViewer }) => {
        WebViewer(
          {
            path: "/lib/webviewer",
            licenseKey: process.env.NEXT_WEBVIEWER_LICENSE_KEY,
          },
          viewerRef.current
        )
          .then((instance) => {
            instance.UI.loadDocument(initialDoc);
            instanceRef.current = instance;
          })
          .catch(console.error);
      })
      .catch(console.error);
  }, []);

  const handleSavePDF = async () => {
    setSaving(true);
    try {
      const instance = instanceRef.current;
      if (!instance) return;

      const doc = instance.Core.documentViewer.getDocument();
      const fileData = await doc.getFileData();
      const pdfDoc = await PDFDocument.load(fileData);
      const firstPage = pdfDoc.getPages()[0];

      firstPage.drawText("Saved from WebViewer", {
        x: 50,
        y: 50,
        size: 20,
        color: rgb(1, 0, 0),
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "modified.pdf";
      link.click();
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col relative">
      <div ref={viewerRef} className="h-[90%] w-full" />
      <button
        onClick={handleSavePDF}
        disabled={saving}
        className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded shadow"
      >
        {saving ? "Saving..." : "Save PDF"}
      </button>
    </div>
  );
}
