import { getTrendingData, getSimpleCoinsList } from "@/utils/server-utils";
import PriceChangePercentageTag from "@/components/PriceChangePercentageTag";
import Image from "next/image";
export default async function Home() {

  const coinsData = await getTrendingData();
  const coinsList = await getSimpleCoinsList();

  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-row flex-wrap gap-4 w-full">
        {coinsData.coins.map((coin, index) => {
          return (
            <a href={`/cryptocurrencies/${coin.item.id}`}>
              <div key={index}>
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
              </div>
            </a>
          );
        })}
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-semibold text-2xl">Other Coins</p>
        {
          coinsList.map((coin, index) => {
            return (
              <div key={index}>
                  <a href={`/cryptocurrencies/${coin.id}`}>
                  <div className="flex flex-col  gap-4 w-full h-full border border-slate-200 rounded-xl p-4 justify-start text-center items-center">
                    <div className="flex flex-row gap-2 items-center justify-between w-full">                      
                        <p className="font-semibold text-2xl">
                          {coin.name}
                        </p>
                        <p>
                          {coin.symbol}
                        </p>
                        <p>
                          {coin.id}
                        </p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })
        }
        </div>
    </main>
  );
}
