import React from 'react';
import './Header.scss';

type Props = {
  usdBuy: number | null;
  usdSell: number | null;
  eurBuy: number | null;
  eurSell: number | null;
};

export const Header: React.FC <Props> = ({
  usdBuy,
  usdSell,
  eurBuy,
  eurSell,
}) => {
  return (
    <div className="header">
      <h1>UAH exchange rates</h1>
      <table className="header__table">
        <tbody>
          <tr className="header__table-row">
            <th>operation</th>
            <th>USD</th>
            <th>EUR</th>
          </tr>
          <tr className="header__table-row">
            <td>BUY</td>
            <td>{usdBuy ? +usdBuy.toFixed(2) : 0}</td>
            <td>{eurBuy ? +eurBuy.toFixed(2) : 0}</td>
          </tr>
          <tr className="header__table-row">
            <td>SELL</td>
            <td>{usdSell ? +(usdSell.toFixed(2)) : 0}</td>
            <td>{eurSell ? +(eurSell.toFixed(2)) : 0}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
