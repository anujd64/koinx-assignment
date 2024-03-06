import { Coin } from "@/utils/types"
import PriceChangePercentageTag from "./PriceChangePercentageTag";

type TrendingItemCardProps = {
    coin : Coin;
}

export default function TrendingItemCard(
    {coin} : TrendingItemCardProps
) {
    return (
         <div className="flex flex-col gap-4 border border-slate-200 rounded-l p-4 justify-start text-center items-center">
                <a href={`/cryptocurrencies/${coin.item.id}`}>
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
                    <img
                      src={coin.item.data.sparkline}
                      alt="sparkline"
                      className="w-full"
                      width={150}
                      height={150}
                    />
                  </div>
                </a>
              </div>
    )
}