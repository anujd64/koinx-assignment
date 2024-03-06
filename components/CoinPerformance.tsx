import { formatNumberWithCommas } from "@/utils/utils";
import FundamentalsRow from "./FundamentalsRow";
import PerformanceBar from "./PerformancBar";
import { CoinDetails } from "@/utils/types";
import Image from "next/image";
import info from "@/public/info.svg";
interface CoinPerformanceProps {
  coinDetails: CoinDetails;
}

export default async function CoinPerformance({ coinDetails }: CoinPerformanceProps) {

  const todayLow = coinDetails.market_data.low_24h.usd;
  const todayHigh = coinDetails.market_data.high_24h.usd;
  const lowPrice = coinDetails.market_data.atl.usd;
  const highPrice = coinDetails.market_data.ath.usd;

  return (
    <div className="bg-white drop-shadow-lg rounded-lg lg:p-8 p-4 h-fit">
      <p className="font-semibold text-2xl">Performance</p>

      <div className="flex flex-row justify-between items-center p-8 gap-4">
        <div className="flex flex-col items-center w-[15%] text-center">
          <p>Today's Low</p>
          <p>${formatNumberWithCommas(todayLow)}</p>
        </div>
        <PerformanceBar highPrice={todayHigh} currentPrice={coinDetails.market_data.current_price.usd} />

        <div className="flex flex-col items-center w-[15%] text-center ">
          <p>Today's High</p>
          <p>${formatNumberWithCommas(todayHigh)}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center p-8 gap-4">
        <div className="flex flex-col items-center w-[15%] text-center">
          <p>52W Low</p>
          <p>${formatNumberWithCommas(lowPrice)}</p>
        </div>

        {/* Performance Bar needs currenPrice and highPrice */}
       <PerformanceBar highPrice={highPrice} currentPrice={coinDetails.market_data.current_price.usd} />
        <div className="flex flex-col items-center w-[15%] text-center">
          <p>52W High</p>
          <p>${formatNumberWithCommas(highPrice)}</p>
        </div>
      </div>

      <div className="flex flex-row gap-2 items-center flex-wrap">
      <p className="font-semibold text-xl">Fundamentals</p>
      <Image src={info} alt="more info" className="opacity-50" width={25} height={25}/>
      </div>
      {coinDetails && (


        <div className="flex lg:flex-row flex-col lg:gap-12">
          <div className="w-full">

          <FundamentalsRow title={`${coinDetails.name} Price`} value={`$${formatNumberWithCommas(coinDetails.market_data.current_price.usd)}`} />
          <FundamentalsRow title="24h Low/24h High" value={
            `$${formatNumberWithCommas(coinDetails.market_data.low_24h.usd)} / $${formatNumberWithCommas(coinDetails.market_data.high_24h.usd)}`
          } />
          
          <FundamentalsRow title="Trading Volume" value={
            `${formatNumberWithCommas(coinDetails.market_data.circulating_supply)} ${coinDetails.symbol.toUpperCase()}`
          } />
          
          <FundamentalsRow title="Market Cap Rank" value={
            `#${coinDetails.market_cap_rank}`
          } />
            
          </div>
          <div className="w-full">

          <FundamentalsRow title="Market Cap" value={`$${formatNumberWithCommas(coinDetails.market_data.market_cap.usd)}`} />
          <FundamentalsRow title="Volume / Market Cap" value={
            `$${formatNumberWithCommas(coinDetails.market_data.total_volume.usd)}`
          } />
          
          <FundamentalsRow title="All Time High" value={
            `$${formatNumberWithCommas(coinDetails.market_data.ath.usd)}`
          } />
          <FundamentalsRow title="All Time Low" value={
            `$${formatNumberWithCommas(coinDetails.market_data.atl.usd)}`
          } />
          
          </div>

        
        </div>
      )}
    </div>
  );
}
