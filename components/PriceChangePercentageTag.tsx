import down from "@/public/down.svg";
import up from "@/public/up.svg";
import Image from "next/image";

type PriceChangePercentageTagProps = {
  priceChangePercentage: number;
};
export default function PriceChangePercentageTag({
  priceChangePercentage,
}: PriceChangePercentageTagProps) {
  return (
    <div>
      

      <div>
        {priceChangePercentage < 0 ? (
          <div className="flex flex-row items-center justify-around gap-2 bg-red-300 rounded-lg bg-opacity-30 py-0.5 px-2">
            <Image src={down} alt="down" className=" w-4 h-4" />
            <p className="text-red-500 font-bold">
              {priceChangePercentage?.toFixed(2)}%
            </p>
          </div>
        ) : (
          <div className="flex flex-row items-center gap-2 justify-between bg-green-300 rounded-lg bg-opacity-30 py-0.5 px-2">
            <Image src={up} alt="up" className="w-4 h-4" />
            <p className="text-green-500 font-bold">
              {priceChangePercentage?.toFixed(2)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
