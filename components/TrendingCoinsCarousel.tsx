import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PriceChangePercentageTag from "./PriceChangePercentageTag";
import Image from "next/image";
import { TrendingResponse } from "@/utils/types";

type TrendingCoinsCarouselProps = {
  coinsData: TrendingResponse;
};
export default async function TrendingCoinsCarousel({
  coinsData,
}: TrendingCoinsCarouselProps) {
  return (
    <Carousel>
      <CarouselPrevious />
      <CarouselContent>
        {coinsData.coins.map((coin, index) => {
          return (
            <CarouselItem key={index} className="lg:basis-1/5 basis-2/10">
              <div className="flex flex-col  gap-4 w-full h-full border border-slate-200 rounded-l p-4 justify-start text-center items-center">
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
                    <Image
                      src={coin.item.data.sparkline}
                      alt="sparkline"
                      className="w-full"
                      width={150}
                      height={150}
                    />
                  </div>
                </a>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
