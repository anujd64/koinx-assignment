"use client";
import EventCard from "@/components/EventCard";
import Image from "next/image";
import info from "@/public/info.svg";
import ProgressBar from "@/components/ProgressBar";
import { events } from "@/utils/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Sentiments() {
  return (
    <div className="bg-white drop-shadow-lg rounded-lg lg:p-8 p-4 h-fit">
      <p className="font-semibold text-2xl">Sentiment</p>
      <div className="flex flex-row gap-2 items-center flex-wrap">
        <p className="font-semibold text-lg text-gray-600">Key Events</p>
        <Image
          src={info}
          alt="more info"
          className="opacity-50"
          width={25}
          height={25}
        />
      </div>

      <div className="relative w-full p-4 h-fit flex flex-row gap-4">
        <div className="h-fit w-full">
          <Carousel>
            <CarouselPrevious />
            <CarouselContent>
              {events.map((event, index) => {
                return (
                  <CarouselItem key={index} className="basis-1/8">
                    <EventCard index={index} event={event} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center flex-wrap">
        <p className="font-semibold text-lg text-gray-600 ">
          Analyst Estimates
        </p>
        <Image
          src={info}
          alt="more info"
          className="opacity-50"
          width={25}
          height={25}
        />
      </div>
      <div className="flex flex-row flex-wrap items-center justify-evenly p-4">
        <div className="w-36 h-36 bg-green-100 opacity-80 rounded-full flex items-center justify-center">
          <p className="text-3xl text-green-500 font-bold">76&#37;</p>
        </div>
        <div className="lg:w-[60%] w-full flex flex-col items-center lg:p-8 p-2 text-gray-400 text-sm">
          <ProgressBar
            textStart="Buy"
            percentage={76}
            className={`bg-green-600`}
          />
          <ProgressBar
            textStart="Hold"
            percentage={8}
            className="bg-gray-600"
          />
          <ProgressBar
            textStart="Sell"
            percentage={16}
            className="bg-red-600"
          />
        </div>
      </div>
    </div>
  );
}
