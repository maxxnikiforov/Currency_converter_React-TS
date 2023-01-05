/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { getRate } from './api';
import { Header } from './components/header/Header';
import { Converter } from './components/converter/Converter';
import './App.scss';

export const App: React.FC = () => {
  const [usdCourseBuy, setUsdCourseBuy] = useState<number>(0);
  const [usdCourseSell, setUsdCourseSell] = useState<number>(0);
  const [eurCourseBuy, setEurCourseBuy] = useState<number>(0);
  const [eurCourseSell, setEurCourseSell] = useState<number>(0);

  useEffect(() => {
    const newCourse = async () => {
      const currentCourse = await getRate();

      const euroRate = currentCourse[1];
      const usdRate = currentCourse[0];

      if (euroRate) {
        setEurCourseBuy(+euroRate.rateBuy);
        setEurCourseSell(+euroRate.rateSell);
      }

      if (usdRate) {
        setUsdCourseBuy(+usdRate.rateBuy);
        setUsdCourseSell(+usdRate.rateSell);
      }

      console.log(currentCourse, usdCourseBuy);
    };

    newCourse();
  }, []);

  return (
    <div className="app">
      <Header
        usdBuy={usdCourseBuy}
        usdSell={usdCourseSell}
        eurBuy={eurCourseBuy}
        eurSell={eurCourseSell}
      />
      <Converter
        usdBuy={usdCourseBuy}
        usdSell={usdCourseSell}
        eurBuy={eurCourseBuy}
        eurSell={eurCourseSell}
      />
    </div>
  );
};
