import React from "react";
import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import UploadForm from "../forms/UploadForm";

const UploadModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="flex flex-col items-center md:flex-row"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FaCloudUploadAlt className="mr-2 text-xl" />
        Upload
      </button>
      {showModal && (
        <div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-orange-900 bg-opacity-80">
          <div className=" relative mx-3 mt-5  flex h-full w-full flex-col justify-between rounded-md bg-white text-black md:h-3/4 md:w-2/4">
            {/* Header */}
            <header className="bg-main flex justify-between rounded-t-md p-5  text-black ">
              <h1 className="text-3xl">Upload your gif.📽️</h1>
              <button onClick={() => setShowModal(false)}>
                <AiFillCloseCircle className="text-3xl" />
              </button>
            </header>
            {/* Body */}
            <main className="flex w-full items-center overflow-y-auto px-8 md:h-2/3 md:py-5">
              <UploadForm setShowModal={setShowModal} />
            </main>
            <hr />
            <footer className="flex justify-start p-5">
              <button
                className="rounded-md bg-red-500 px-3 py-2 text-white"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadModal;
