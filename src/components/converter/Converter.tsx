import React, { useState } from 'react';
import './Converter.scss';

type Props = {
  usdBuy: number;
  usdSell: number;
  eurBuy: number;
  eurSell: number;
};

export const Converter: React.FC <Props> = ({
  usdBuy,
  usdSell,
  eurBuy,
  eurSell,
}) => {
  const [operation, setOperation] = useState<string>('sell');
  const [amount, setAmount] = useState<number>(0);
  // const [yourSum, setYourSum] = useState<number>(0);
  const [yourCurrency, setYourCurrency] = useState<string>('UAH');
  const [changeTo, setChangeTo] = useState<string>('USD');
  const [convertedSum, setConvertedSum] = useState<number>(0);

  const changeOperation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOperation(event.target.value);
  };

  const chooseYourCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYourCurrency(event.target.value);
  };

  const chooseChangeTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChangeTo(event.target.value);
  };

  return (
    <div className="converter">
      <div className="converter__operation">
        <h3>Your operation</h3>
        <select
          name="operation"
          value={operation}
          onChange={changeOperation}
        >
          <option value="sale">sale</option>
          <option value="buy">buy</option>
        </select>
      </div>
      <section className="converter__inOutPut-container">
        <div className="converter__inPut-container">
          <div>
            <h4>Your Sum</h4>
            <input
              name="input"
              type="number"
              className="converter__input"
              value={amount.toString().replace(/^0+/, '')}
              onChange={(event) => setAmount(+event.target.value)}
              placeholder="write your amount"
            />
          </div>

          <div className="converter__operation">
            <h4>Change from:</h4>
            <select
              name="operation"
              value={yourCurrency}
              onChange={chooseYourCurrency}
            >
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>

        <div className="converter__OutPut-container">
          <div>
            <h4>Converted Sum</h4>
            <input
              name="input"
              type="number"
              className="converter__input"
              value={convertedSum.toString().replace(/^0+/, '')}
              onChange={(event) => setConvertedSum(+event.target.value)}
              placeholder="converted amount"
            />
          </div>

          <div className="converter__operation">
            <h4>Change to:</h4>
            <select
              name="operation"
              value={changeTo}
              onChange={chooseChangeTo}
            >
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
      </section>
      <p>{usdBuy}</p>
      <p>{usdSell}</p>
      <p>{eurBuy}</p>
      <p>{eurSell}</p>
    </div>
  );
};
