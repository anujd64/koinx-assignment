"use server";
import React from "react";

import TrendingItemRow from "./TrendingItemRow";
import SideBarCard from "./SideBarCard";
import { TrendingResponse } from "@/utils/types";

type SideBarProps = {
  coinsData: TrendingResponse;
};

export default async function SideBar(
  { coinsData }: SideBarProps
) {

  return (
    <div className="flex flex-col items-center gap-8">
      <SideBarCard />
      <div className="bg-white w-full drop-shadow-lg rounded-lg h-fit px-8 py-4">
        <p className="font-semibold text-2xl py-2"> Trending Coins (24h)</p>
        {coinsData.coins.map((coin, index) => {
          if (index < 3) return <TrendingItemRow key={index} coin={coin} />;
        })}
      </div>
    </div>
  );
}
