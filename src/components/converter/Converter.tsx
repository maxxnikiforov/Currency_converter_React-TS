import React, { useState, useEffect } from 'react';
import { Exchange, Currency, Operation } from '../../type/types';
import './Converter.scss';

type Props = {
  mono: Exchange | null;
};

export const ConverterComponent: React.FC <Props> = ({
  mono,
}) => {
  const [operation, setOperation] = useState<Operation>('buy');
  const [leftCur, setLeftCur] = useState<Currency>('UAH');
  const [rightCur, setRightCur] = useState<Currency>('USD');
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');

  const onChangeLeft = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRight('');
    setLeft(e.target.value.replace(/[^0-9]/g, ''));
    const k = mono ? mono[leftCur][rightCur][operation] : 1;

    setRight((Number(e.target.value) * Number(k)).toFixed(2));
  };

  const onChangeRight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeft('');
    setRight(e.target.value.replace(/[^0-9]/g, ''));
    const k = mono ? mono[rightCur][leftCur][operation] : 1;

    setLeft((Number(e.target.value) * Number(k)).toFixed(2));
  };

  const changeOperation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    if (value === 'sell' || value === 'buy') {
      setOperation(value);
    }
  };

  const onChangeLeftCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    if (value === 'USD' || value === 'EUR' || value === 'UAH') {
      setLeftCur(value);
    }
  };

  const onChangeRightCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    if (value === 'USD' || value === 'EUR' || value === 'UAH') {
      setRightCur(value);
    }
  };

  const convertFromLeft = (
    firstCur: Currency, secondCur: Currency, typeOperation: Operation, monoObj: Exchange | null,
  ) => {
    if (left && monoObj
      && (leftCur === 'USD' || leftCur === 'EUR' || leftCur === 'UAH')
      && (rightCur === 'USD' || rightCur === 'EUR' || rightCur === 'UAH')
      && (typeOperation === 'buy' || typeOperation === 'sell')
    ) {
      const newRight = (+left)
      * Number(monoObj[leftCur][rightCur][operation]);

      setRight(newRight.toFixed(2));
    }
  };

  const convertFromRight = (
    firstCur: Currency, secondCur: Currency, typeOperation: Operation, monoObj: Exchange | null,
  ) => {
    if (right && monoObj
      && (leftCur === 'USD' || leftCur === 'EUR' || leftCur === 'UAH')
      && (rightCur === 'USD' || rightCur === 'EUR' || rightCur === 'UAH')
      && (typeOperation === 'buy' || typeOperation === 'sell')
    ) {
      const newLeft = (+right) * Number(monoObj[rightCur][leftCur][operation]);

      setLeft(newLeft.toFixed(2));
    }
  };

  useEffect(() => {
    convertFromLeft(leftCur, rightCur, operation, mono);
  }, [leftCur, operation]);

  useEffect(() => {
    convertFromRight(leftCur, rightCur, operation, mono);
  }, [rightCur, operation]);

  return (
    <div className="converter">
      <div className="converter__operation">
        <h3>Your operation</h3>
        <select
          className="converter__select"
          name="operation"
          value={operation}
          onChange={changeOperation}
        >
          <option value="sell">sell</option>
          <option value="buy">buy</option>
        </select>
      </div>

      <section className="converter__inOutPut-container">
        <div className="converter__inPut-container">
          <div>
            <h4>Your Sum</h4>
            <input
              name="input"
              type="string"
              className="converter__input"
              value={left}
              onChange={onChangeLeft}
              placeholder="write your amount"
            />
          </div>

          <div className="converter__operation">
            <h4>Change from:</h4>
            <select
              className="converter__select"
              name="operation"
              value={leftCur}
              onChange={onChangeLeftCurrency}
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
              type="string"
              className="converter__input"
              value={right}
              onChange={onChangeRight}
              placeholder="converted amount"
            />
          </div>

          <div className="converter__operation">
            <h4>Change to:</h4>
            <select
              className="converter__select"
              name="operation"
              value={rightCur}
              onChange={onChangeRightCurrency}
            >
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
      </section>

      {leftCur === rightCur
       && <p className="converter__alert">Please choose different currensies</p>}
    </div>
  );
};
