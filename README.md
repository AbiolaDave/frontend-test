# PDF Annotation App

## Overview

This is a **Single Page Application (SPA)** built using **Next.js** that allows users to upload, view, and annotate PDF documents. The app leverages **WebViewer** for seamless PDF rendering and annotation.

## Setup and Running Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/AbiolaDave/frontend-test.git
   cd frontend-test
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to use the app.

## Tools and Libraries Used

- **Next.js** – Framework for building React apps with server-side rendering.
- **TypeScript** – Provides type safety and better development experience.
- **Tailwind CSS** – For styling components efficiently.
- **react-dropzone** – Enables drag-and-drop file uploads.
- **WebViewer** – Used instead of **react-pdf**, **react-canvas-draw**, and **pdfjs-dist** to avoid compatibility issues while handling PDF annotations.
- **Next.js API Routes** – Used for potential backend integration (if expanded in the future).

## Challenges Faced and Solutions

### Compatibility Issues

- **Problem:** Integrating **react-canvas-draw**, **react-pdf**, and **pdfjs-dist** together caused rendering and annotation issues.
- **Solution:** Switched to **WebViewer**, which provides a more stable and feature-rich PDF annotation experience.

## Future Enhancements

If given more time, the following features would be added:

1. **User Authentication** – Allow users to log in and have personalized document storage.
2. **Save Uploaded Files** – Store user-uploaded and annotated PDFs in a backend.
3. **Document History** – Show users their previously uploaded and annotated files upon login.
4. **Enhanced Annotation Tools** – Add more annotation features like sticky notes, signatures, and collaborative editing.

## Author

Developed by Abiola Odesomi
