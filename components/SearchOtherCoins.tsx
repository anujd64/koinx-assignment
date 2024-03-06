'use client'
import useDebounce from "@/hooks/useDebounce";
import { getSimpleCoinsList } from "@/utils/server-utils";
import { SimpleCoin } from "@/utils/types";
import { useEffect, useState } from "react";

export default function OtherCoinsList() {

    const [searchQuery, setSearchQuery] = useState("");
    const [coinsList, setCoinsList] = useState<SimpleCoin[]>([]);
    const [filteredCoinsList, setFilteredCoinsList] = useState<SimpleCoin[]>([]);
    useEffect(() => {
        const fetchCoinsList = async () => {
            let cachedCoinsList = localStorage.getItem('coinsList');

            if (cachedCoinsList) {
                setCoinsList(JSON.parse(cachedCoinsList));
            } else {
                const response = await getSimpleCoinsList();
                setCoinsList(response);
                localStorage.setItem('coinsList', JSON.stringify(response));
            }
        };
        
        fetchCoinsList();
    }, []);

    useDebounce(() => {
        const filterData = async () => {
            const filteredData = coinsList.filter((coin) => {
                return coin.name.toLowerCase().includes(searchQuery.toLowerCase());
            });
            setFilteredCoinsList(filteredData);
        }
        if(
            searchQuery !== "" &&
            searchQuery !== null &&
            searchQuery !== undefined
        ){
            filterData()
        }else{
            setFilteredCoinsList([]);
        }
      }, [searchQuery], 600
    );

    return(
  
      <section>
      <div className="sticky top-0 left-0 z-50 -pt-4 bg-slate-50">
    <div className="font-semibold text-center lg:text-2xl p-4">Search for a crypto</div>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-10 p-4 text-lg border border-slate-200 rounded-lg"
        />
      </div>
      <div className="relative flex flex-col gap-4">

          {
              filteredCoinsList.length === 0 ? (
                  <div className="text-center" >
                    {searchQuery.length === 0  ? "Start searching!" : "No results found!"}
                    </div>
                  ) :
                  filteredCoinsList.map((coin, index) => {
                      return (
                          <div key={index} className="flex flex-col gap-4 border border-slate-200 rounded-xl p-4 justify-start text-center items-start">
                    <a href={`/cryptocurrencies/${coin.id}`} className="w-full">
                      <p className="font-semibold">
                            {coin.name.substring(0, 20)}
                          </p>
                          <div className="flex lg:flex-row flex-col gap-2 items-center justify-between w-full">                       
                          <p>
                            {coin.symbol}
                          </p>
                          <p>
                            {coin.id.substring(0, 20)}
                          </p>
                      </div>
                  </a>
                    </div>
              );
            })
        }
        </div>
      </section>
    )
  }