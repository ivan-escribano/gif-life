import React from "react";
const Cover = () => {
  return (
    <div
      className="bg-secondary flex flex-col-reverse p-5 md:flex md:flex-row md:pl-14"
      style={{ height: "80vh" }}
    >
      <div className="cover-title   flex  flex-1 flex-col justify-center ">
        <p className="text-4xl">A smile is the best way to start your day.</p>
        <p className="bg-main mt-2 w-fit rounded-md p-1 text-4xl text-white">
          Smile and be happy
        </p>
      </div>
      <div className="cover-img  flex flex-1 justify-end ">
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1667607481/GifLife/pikachu-happy_wliz1v.gif"
          alt="Pikachu happy"
          className="h-full"
        />
      </div>
    </div>
  );
};

export default Cover;
