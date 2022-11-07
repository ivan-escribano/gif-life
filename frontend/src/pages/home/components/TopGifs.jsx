import React from "react";
import { getAllGifs } from "src/api/gif";
import { useQuery } from "@tanstack/react-query";
import GifCards from "src/components/gifCards/GifCards";
const TopGifs = () => {
  const { data, isLoading, isError } = useQuery(["gifs"], getAllGifs);
  if (isLoading) {
    return <h1>IS LOADING</h1>;
  }
  const topGifs = () => {
    const gifs = data.map((gif) => {
      return (
        <GifCards
          key={gif._id}
          id={gif._id}
          description={gif.description}
          gifImage={gif.gifImage}
          title={gif.title}
          gifType={gif.gifType}
        />
      );
    });

    return gifs.slice(0, 4);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-5 text-center text-3xl">TOP GIF'S 🔥</h1>
      <hr className="mt-2 h-0.5 w-1/2 bg-black md:w-1/4" />
      <div className="card-container grid grid-cols-1 gap-3 p-5 md:grid-cols-4 md:px-8">
        {topGifs()}
      </div>
    </div>
  );
};

export default TopGifs;
