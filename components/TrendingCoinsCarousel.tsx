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
import TrendingItemCard from "./TrendingItemCard";

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
              <TrendingItemCard coin={coin} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
