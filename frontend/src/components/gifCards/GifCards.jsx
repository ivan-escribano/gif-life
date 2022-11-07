import React from "react";
import GifHashTag from "./GifHashTag";
import { v4 as uuidv4 } from "uuid";

const GifCards = ({ gifImage, title, gifType, description }) => {
  return (
    <div className="my-5 rounded-md border-2 py-4 px-3">
      <div className="card-img ">
        <img src={gifImage} alt="Gif image" className="w-full" />
      </div>
      <div className="card-content">
        <div className="card-info mt-4 flex justify-between">
          <h2 className=" text-2xl">{title}</h2>
          <div>
            <button
              className="bg-main rounded-md px-4 py-1 text-lg font-medium text-white"
              onClick={() =>
                navigator.share({
                  title,
                  text: description,
                  url: gifImage,
                })
              }
            >
              Share
            </button>
          </div>
        </div>
        <div className="mt-3 flex text-lg">
          {gifType.map((type) => {
            return <GifHashTag type={type} key={uuidv4()} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GifCards;
