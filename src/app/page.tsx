"use client";
import Image1 from "@/app/assets/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg";
import Image2 from "@/app/assets/3_Tradebooks-922752db04177f3417c8505ff1970f9d88be19f966cff7ce4654bd85c5073ac3.png";
import Image3 from "@/app/assets/all-books-mainpage2.jpg";
import Image4 from "@/app/assets/blank-book-cover-mockup-design-template-authors-publishers_191095-84142.jpg";
import Style from "@/app/styles/Homepage.module.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <main className={`flex justify-evenly ${Style.main}`}>
        <div className={Style.sty}>
          <h1 className={`${Style.easy} font-bold text-4xl text-green-600 `}>
            Powerful Online PDF Editing & Annotation Tool
          </h1>
          <p className={`${Style.friendly} text-2xl text-gray-800`}>
            Upload, annotate, and export PDF documents effortlessly.
          </p>
          <div>
            <Link href={"/file"}>
              <button className="text-white font-bold bg-green-700
               hover:bg-green-800 focus:ring-4 focus:outline-none
                focus:ring-green-300 rounded-lg text-lg px-4 py-3
                 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <p className="font-bold">Get Started</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-20">
          <div
            className={`${Style.ring} flex justify-center items-center rounded-full`}
          >
            <Image
              className={Style.book}
              width={300}
              height={300}
              src={Image1}
              alt="PDF Document Preview"
            />
          </div>
          <p className={`${Style.eclipse}`}></p>
          <p className={`${Style.eclipse2}`}></p>
          <p className={`${Style.eclipse3}`}></p>
          <p className={`${Style.eclipse4}`}></p>
        </div>
      </main>
      <section className={Style.section}>
        <div className={`mt-40 sm:mt-28 ${Style.mt}`}>
          <h1
            className={`font-bold text-5xl text-green-600 mx-40
               md:text-2xl text-center sm:text-xs ${Style.comp}`}
          >
            A Complete Solution for PDF Editing & Annotation
          </h1>
          <div className={`${Style.gridContainer}`}>
            <div className={`${Style.gridItems}`}>
              <Image
                className={`${Style.gridImage}`}
                src={Image2}
                width={300}
                alt="Upload PDF"
              />
              <h1 className="text-green-600">Upload & View PDF Documents</h1>
              <p className="text-gray-700">
                Easily upload PDF documents via drag-and-drop or file selection.
                Instantly preview them in the viewer before making any edits.
              </p>
              <button className="text-green-500 font-bold 
              focus:outline-none rounded-lg text-lg px-4 py-3">
                Get Started
              </button>
            </div>
            <div className={`${Style.gridItems}`}>
              <Image
                className={`${Style.gridImage}`}
                src={Image3}
                width={300}
                alt="Annotate PDF"
              />
              <h1 className="text-green-600">Annotate with Ease</h1>
              <p className="text-gray-700">
                Highlight, underline, and add comments to your documents. Draw
                freehand signatures and markups effortlessly.
              </p>
              <button className="text-green-500 font-bold 
              focus:outline-none rounded-lg text-lg px-4 py-3">
                Get Started
              </button>
            </div>
            <div className={`${Style.gridItems}`}>
              <Image
                className={`${Style.gridImage}`}
                src={Image4}
                width={300}
                alt="Export PDF"
              />
              <h1 className="text-green-600">Save & Export Annotations</h1>
              <p className="text-gray-700">
                Download your edited PDF with all annotations and signatures
                embedded, ensuring high-quality document output.
              </p>
              <Link href={"/file"}>
                <button className="text-green-500 font-bold focus:outline-none 
                rounded-lg text-lg px-4 py-3">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
