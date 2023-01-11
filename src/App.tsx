import React, { useState, useEffect } from 'react';
import { getRate } from './api';
import { Header } from './components/header/Header';
import { ConverterComponent } from './components/converter/Converter';
import { Exchange } from './type/types';
import './App.scss';

export const App: React.FC = () => {
  const [mono, setMono] = useState<Exchange | null>(null);

  useEffect(() => {
    const newCourse = async () => {
      const monoInitial: Exchange = {
        USD: {
          USD: {
            buy: 'no data',
            sell: 'no data',
          },
          EUR: {
            buy: 'no data',
            sell: 'no data',
          },
          UAH: {
            buy: 'no data',
            sell: 'no data',
          },
        },
        EUR: {
          USD: {
            buy: 'no data',
            sell: 'no data',
          },
          EUR: {
            buy: 'no data',
            sell: 'no data',
          },
          UAH: {
            buy: 'no data',
            sell: 'no data',
          },
        },
        UAH: {
          USD: {
            buy: 'no data',
            sell: 'no data',
          },
          EUR: {
            buy: 'no data',
            sell: 'no data',
          },
          UAH: {
            buy: 'no data',
            sell: 'no data',
          },
        },
      };

      monoInitial.EUR.EUR.buy = 1;
      monoInitial.EUR.EUR.sell = 1;
      monoInitial.USD.USD.buy = 1;
      monoInitial.USD.USD.sell = 1;
      monoInitial.UAH.UAH.buy = 1;
      monoInitial.UAH.UAH.sell = 1;

      const currentCourse = await getRate();

      const euroRate = currentCourse[1];
      const usdRate = currentCourse[0];
      const eurUsdRate = currentCourse[2];

      if (eurUsdRate) {
        monoInitial.EUR.USD.buy = +eurUsdRate.rateBuy;
        monoInitial.USD.EUR.sell = 1 / (+eurUsdRate.rateBuy);
        monoInitial.EUR.USD.sell = +eurUsdRate.rateSell;
        monoInitial.USD.EUR.buy = 1 / (+eurUsdRate.rateSell);
      }

      if (euroRate) {
        monoInitial.EUR.UAH.buy = +euroRate.rateBuy;
        monoInitial.UAH.EUR.sell = 1 / (+euroRate.rateBuy);
        monoInitial.EUR.UAH.sell = +euroRate.rateSell;
        monoInitial.UAH.EUR.buy = 1 / (+euroRate.rateSell);
      }

      if (usdRate) {
        monoInitial.USD.UAH.buy = +usdRate.rateBuy;
        monoInitial.UAH.USD.sell = 1 / (+usdRate.rateBuy);
        monoInitial.USD.UAH.sell = +usdRate.rateSell;
        monoInitial.UAH.USD.buy = 1 / (+usdRate.rateSell);
      }

      setMono(monoInitial);
    };

    newCourse();
  }, []);

  return (
    <div className="app">
      <Header
        usdBuy={mono ? +(mono.USD.UAH.buy) : 0}
        usdSell={mono ? +(mono.USD.UAH.sell) : 0}
        eurBuy={mono ? +(mono.EUR.UAH.buy) : 0}
        eurSell={mono ? +(mono.EUR.UAH.sell) : 0}
      />
      <ConverterComponent
        mono={mono}
      />
    </div>
  );
};
