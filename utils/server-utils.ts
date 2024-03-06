import { CoinDetails, CoinPerformanceData, SimpleCoin, TrendingResponse } from "./types";

export async function getTrendingData(): Promise<TrendingResponse> {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
    const data = await response.json();
    return data;
}


export async function getCoinData(coin: string):Promise<CoinDetails> {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
    const data = await response.json();
    return data;
}

export async function getSimpleCoinsList() : Promise<SimpleCoin[]> {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
    const data = await response.json();
    return data;
}