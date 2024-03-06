import { getCoinData, getTrendingData } from "@/utils/server-utils";
import AboutCoin from "@/components/AboutCoin";
import Sentiments from "@/components/Sentiments";
import Tokenomics from "@/components/Tokenomics";
import TeamSection from "@/components/TeamSection";
import SideBar from "@/components/SideBar";
import HeroCoinDetails from "@/components/HeroCoinDetails";

import TrendingCoinsCarousel from "@/components/TrendingCoinsCarousel";
import CoinPerformance from "@/components/CoinPerformance";

type PageProps = {
  params: any;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function Page(searchParams: PageProps) {
  const coin = decodeURI(searchParams.params.coin);
  const coinDetails = await getCoinData(coin);
  const trendingCoinsData = await getTrendingData();

  return (
    <>
      <p className="text-sm font-light pt-2 self-start text-slate-600">
        Cryptocurrencies &gt;&gt; {coinDetails.name}
      </p>

      <div className="flex lg:flex-row  md:flex-col flex-col w-full gap-4 justify-between">
        <section className="lg:w-[70%] flex flex-col gap-8">
          <div className="bg-white drop-shadow-lg rounded-lg p-8 h-fit w-full">
            <HeroCoinDetails coinDetails={coinDetails} />
          </div>
          <CoinPerformance coinDetails={coinDetails} />
          <Sentiments />
          <AboutCoin
            coinInfo={coinDetails.description.en}
            coinName={coinDetails.name}
          />
          <Tokenomics />
          <TeamSection />
        </section>

        <section className="lg:w-[30%]">
          <SideBar coinsData={trendingCoinsData} />
        </section>
      </div>
      <div className="bg-white drop-shadow-lg rounded-lg p-8 h-fit w-full">
        <p className="font-semibold text-2xl pb-4">You May Also Like</p>
        <TrendingCoinsCarousel coinsData={trendingCoinsData} />
      </div>
    </>
  );
}
