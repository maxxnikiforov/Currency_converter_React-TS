const API_MONO = 'https://api.monobank.ua/bank/currency';

export async function getRate(): Promise<MONO[]> {
  const response = await fetch(API_MONO);

  return response.json();
}
