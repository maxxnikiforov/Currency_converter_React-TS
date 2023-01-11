export type Operation = 'sell' | 'buy';
export type Currency = 'USD' | 'EUR' | 'UAH';

export type Exchange = {
  [param in Currency]: {
    [to in Currency]: {
      [change in Operation]: number | 'no data';
    };
  };
};
