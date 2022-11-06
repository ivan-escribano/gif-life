import React from "react";

const GifCards = () => {
  return (
    <div className="my-5 rounded-md border-2 py-4 px-3">
      <div className="card-img ">
        <img
          src="https://media1.giphy.com/media/gd09Y2Ptu7gsiPVUrv/giphy.gif"
          alt="Gif image"
        />
      </div>
      <div className="card-content">
        <h2 className="mt-4 text-2xl">Sponge Bob my g</h2>
        <div className="card-info mt-4 flex justify-between">
          <p className="text-lg">@ivanescribano</p>
          <button className="bg-main rounded-md px-4 py-1 text-lg font-medium text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default GifCards;
