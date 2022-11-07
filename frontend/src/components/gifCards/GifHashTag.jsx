import React from "react";

const GifHashTag = ({ type }) => {
  const tagType = {
    general: "bg-red-300",
    cartoons: "bg-amber-400",
    entertainment: "bg-blue-300",
    reactions: "bg-indigo-400",
  };
  return (
    <div className={`rounded-lg  ${tagType[type]} ml-1 px-2`}>#{type}</div>
  );
};

export default GifHashTag;
