import React from 'react';
import './Header.scss';

type Props = {
  usdBuy: number;
  usdSell: number;
  eurBuy: number;
  eurSell: number;
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
        <tr className="header__table-row">
          <th>operation</th>
          <th>USD</th>
          <th>EUR</th>
        </tr>
        <tr className="header__table-row">
          <td>BUY</td>
          <td>{+usdBuy.toFixed(2)}</td>
          <td>{+eurBuy.toFixed(2)}</td>
        </tr>
        <tr className="header__table-row">
          <td>SELL</td>
          <td>{+usdSell.toFixed(2)}</td>
          <td>{+eurSell.toFixed(2)}</td>
        </tr>
      </table>
    </div>
  );
};
