import Image from "next/image";
import up from "@/public/up.svg";
import { formatNumberWithCommas } from "@/utils/utils";

type PerformanceBarProps = {
    highPrice: number;
    currentPrice: number;
};
export default function PerformanceBar(
    { highPrice, currentPrice }: PerformanceBarProps
) {
    return (
        <div className="flex flex-col items-start w-[70%] ">
        <span className="bg-gradient-to-r from-red-500 via-orange-400 to-green-500 h-1.5 w-full rounded-lg"></span>
        <div className="flex flex-row justify-end" style={{ width: `${(currentPrice / highPrice) * 100}%` }}>
        <div className="flex flex-col items-center">
        <Image
          src={up}
          alt=""
          width={15}
          height={15}
          />
          <p>
            ${formatNumberWithCommas(currentPrice)}
          </p>
          </div>
          </div>
      </div>
    )
}