import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { getAllGifs } from "src/api/gif";
import GifCards from "src/components/gifCards/GifCards";

const Dashboard = () => {
  const { data, isLoading, isError } = useQuery(["gifs"], getAllGifs);
  const [filterName, setFilterName] = useState("");
  const [filterLabel, setFilterLabel] = useState("general");
  const filterValues = () => {
    const filtered = data
      .filter((gif) => {
        if (filterName === "") return gif;
        else if (gif.title.toLowerCase().includes(filterName.toLowerCase())) {
          return gif;
        }
      })
      .filter((gif) => {
        if (filterLabel === "general") return gif;
        const isType = gif.gifType.some((type) => type === filterLabel);
        if (isType) {
          return gif;
        }
      })
      .map((gif) => {
        return (
          <GifCards
            key={gif._id}
            id={gif._id}
            gifImage={gif.gifImage}
            title={gif.title}
            gifType={gif.gifType}
          />
        );
      });
    return filtered.length > 0 ? (
      filtered
    ) : (
      <div className="flex w-full flex-col">
        <h1 className="mb-5 text-3xl text-black">No Gif's found 😔</h1>
        <img
          src="https://res.cloudinary.com/dlpvgtdlv/image/upload/v1667804743/GifLife/giphy_6_nftubd.gif"
          alt=""
          className="rounded-xl"
        />
      </div>
    );
  };
  if (isLoading) {
    return <h1>Is loading.....</h1>;
  }
  if (isError) {
    toast.error("Cannot get the gif's");
  }

  return (
    <>
      <div className="ml-4 hidden  p-5 md:flex">
        <div className="mr-5">
          <h2 className="text-xl">Search:</h2>
          <input
            type="text"
            className="border"
            onChange={(e) => setFilterName(e.target.value)}
            value={filterName}
          />
        </div>
        <div>
          <h2 className="text-xl">Type</h2>
          <select
            className="border"
            value={filterLabel}
            onChange={(e) => setFilterLabel(e.target.value)}
          >
            <option value="general">general</option>
            <option value="cartoons">cartoons</option>
            <option value="entertainment">entertainment</option>
            <option value="reactions">reactions</option>
          </select>
        </div>
      </div>
      <div className="card-container grid grid-cols-1 gap-3 p-5 md:grid-cols-4 md:px-8">
        {filterValues()}
      </div>
    </>
  );
};

export default Dashboard;
