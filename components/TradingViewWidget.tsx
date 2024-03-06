'use client'
// TradingViewWidget.jsx
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

type TradingViewWidgetProps = {
  coinSymbol: string;
};
function TradingViewWidget(
  { coinSymbol }: TradingViewWidgetProps
) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": false,
          "symbol": "BITSTAMP:${coinSymbol}USD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "withdateranges": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true
                }`;
        if(container.current) 
        container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
