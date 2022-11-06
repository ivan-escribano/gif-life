import React from "react";
import GifCards from "src/components/gifCards/GifCards";

const Dashboard = () => {
  return (
    <div className="card-container grid grid-cols-1 gap-3 p-5 md:grid-cols-4 md:px-8">
      <GifCards />
      <GifCards />
      <GifCards />
      <GifCards />
      <GifCards />
      <GifCards />
    </div>
  );
};

export default Dashboard;
