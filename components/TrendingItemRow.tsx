import { Coin } from "@/utils/types";
import Image from "next/image";
import PriceChangePercentageTag from "./PriceChangePercentageTag";

type TrendingItemRowProps = {
  coin: Coin;
};
export default function TrendingItemRow({ coin }: TrendingItemRowProps) {
  return (
    <div className="flex flex-row gap-4 w-full p-2 justify-start text-center items-center">
        <a href={`/cryptocurrencies/${coin.item.id}`}>
        <div className="w-12 h-12 bg-gray-100  ">
          <Image
            src={coin.item.large}
            alt="coin-logo"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-row gap-2 justify-around w-full">
          <div className="flex flow-row gap-2">
            <p className="font-semibold text-lg">
              {coin.item.name.substring(0, 6)}
            </p>
            <p className="text-lg">({coin.item.symbol.substring(0, 3)})</p>
          </div>
          <PriceChangePercentageTag
            priceChangePercentage={
              coin.item.data.price_change_percentage_24h.usd
            }
          />
        </div>
      </a>
    </div>
  );
}
