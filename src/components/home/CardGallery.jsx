import React from "react";

const CardGallery = ({ questions }) => {
  return (
    <div className="grid overflow-x-auto grid-flow-col auto-cols-max gap-4 mx-4 scroll-smooth">
      {
        questions.map((question) => (

          <div className="w-[14rem] h-72 rounded-lg overflow-hidden shadow-lg relative">
            <img
              src={question.src}
              alt="Image 1"
              className="object-cover w-full opacity-50"
            />
            <div className="absolute  bottom-0">
              <p className="p-4 text-lg text-blue-950 font-medium">{question.ques}</p>
              <div className="flex justify-center my-4">
                <button className="bg-white text-black rounded-full px-4 py-2 mr-4">
                  Yes
                </button>
                <button className="bg-white text-black rounded-full px-4 py-2">
                  No
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardGallery;