import { getTrendingData, getSimpleCoinsList } from "@/utils/server-utils";
import PriceChangePercentageTag from "@/components/PriceChangePercentageTag";
import Image from "next/image";
import SearchOtherCoins from "@/components/SearchOtherCoins";
export default async function Home() {

  const coinsData = await getTrendingData();

  return (
    <main className="flex lg:flex-row flex-col lg:py-2 py-16 gap-8">

      {/* Trending Crypto */}
      <div className="flex flex-col lg:w-2/3 w-full">
      <p className="font-semibold lg:text-2xl p-4 text-xl">Trending coins</p>

      <div className="flex flex-row justify-evenly flex-wrap  gap-4">
        {coinsData.coins.map((coin, index) => {
          return (
            <div key={index}>
            <a href={`/cryptocurrencies/${coin.item.id}`}>
                <div className="flex flex-col  gap-4 w-full h-full border border-slate-200 rounded-l p-4 justify-start text-center items-center">
                  <div className="flex flex-row flex-wrap gap-2 items-center w-full">
                    <img
                      src={coin.item.small}
                      alt="coin-logo"
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-lg">
                        {coin.item.symbol}
                      </p>
                    </div>
                    <PriceChangePercentageTag
                      priceChangePercentage={
                        coin.item.data.price_change_percentage_24h.usd
                      }
                      />
                  </div>
                  <p className="font-semibold text-lg text-start w-full">
                    {coin.item.data.price.substring(0, 5)}
                  </p>
                  <div>
                    <Image
                      src={coin.item.data.sparkline}
                      alt="sparkline"
                      className="w-full"
                      width={150}
                      height={150}
                      />
                  </div>
                </div>
            </a>
              </div>
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
