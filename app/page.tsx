'use client'
import { getTrendingData } from "@/utils/server-utils";
import SearchOtherCoins from "@/components/SearchOtherCoins";
import TrendingItemCard from "@/components/TrendingItemCard";
import { useEffect, useState } from "react";
import { TrendingResponse } from "@/utils/types";
export default function Home() {

  const [coinsData, setCoinsData] = useState<TrendingResponse | undefined>();
  useEffect(() => {
    getTrendingData().then((data) => {
      setCoinsData(data);
    });
  }, []);
  

  return (
    <main className="flex lg:flex-row flex-col lg:py-2 py-16 gap-8">

      {/* Trending Crypto */}
      <div className="flex flex-col lg:w-2/3 w-full">
      <p className="font-semibold lg:text-2xl p-4 text-xl">Trending coins</p>
      <div className="flex flex-row justify-evenly flex-wrap  gap-4">
        {coinsData && coinsData.coins.map((coin, index) => {
          return (
            <TrendingItemCard key={index} coin={coin} />
          );
        })}
      </div>
        </div>

      <div className="flex flex-col w-full lg:w-1/3 h-screen gap-4 pb-4 px-4 bg-slate-50 scroll whitespace-nowrap overflow-y-auto">
        <SearchOtherCoins />
        </div>
    </main>
  );
}
