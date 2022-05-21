import { useState, useContext, useEffect } from "react";
import { HermitradeContext } from "../context/HermitradeContext";

const Home = () => {

  useEffect(() => {
    document.body.classList.add('h-full');
    document.body.classList.add('m-0');
    document.body.classList.add('p-0');

  });

  return (
    <div>
      <div className="w-full h-full home-bg">
        <div className="flex h-full opacity-100 items-center justify-center pt-16">
          <div className="flex-col text-center justify-center m-60 text-white">
            <h1 className="text-6xl">Hermitrade</h1>
            <h4 className="mt-8">For <strong>all</strong> your electronic needs.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;