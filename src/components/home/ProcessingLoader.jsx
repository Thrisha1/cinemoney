import React, { useState, useEffect } from "react";

const ProcessingLoader = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => {
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowSuccessModal(false);
          onClose();
        }, 2000);
      }, 2000);
    } else {
      setShowModal(false);
      setShowSuccessModal(false);
    }
  }, [isOpen, onClose]);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-75 z-50"></div>
          <div className="bg-white rounded-lg py-5 px-8 relative z-50">
            <div className="flex flex-col items-center mb-4">
              <span className="text-lg font-bold">Waiting for Progress</span>
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 mt-1"></div>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-5">
          <div className="absolute inset-0 bg-gray-500 opacity-75 z-50"></div>
          <div className="bg-[#E9FADF] rounded-lg p-5 relative z-50 flex flex-col items-center justify-center">
            <h2 className="text-md mb-4 text-center">
              Trade Confirmed and Waiting for Match
            </h2>
            <svg
            className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512 512"
            >
              <path
                fill="#3AAF3C"
                d="M256 0c141.39 0 256 114.61 256 256S397.39 512 256 512 0 397.39 0 256 114.61 0 256 0z"
              />
              <path
                fill="#0DA10D"
                fill-rule="nonzero"
                d="M391.27 143.23h19.23c-81.87 90.92-145.34 165.89-202.18 275.52-29.59-63.26-55.96-106.93-114.96-147.42l22.03-4.98c44.09 36.07 67.31 76.16 92.93 130.95 52.31-100.9 110.24-172.44 182.95-254.07z"
              />
              <path
                fill="#fff"
                fill-rule="nonzero"
                d="M158.04 235.26c19.67 11.33 32.46 20.75 47.71 37.55 39.53-63.63 82.44-98.89 138.24-148.93l5.45-2.11h61.06c-81.87 90.93-145.34 165.9-202.18 275.53-29.59-63.26-55.96-106.93-114.96-147.43l64.68-14.61z"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default ProcessingLoader;
