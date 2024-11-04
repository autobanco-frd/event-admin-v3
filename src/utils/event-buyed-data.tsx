export interface EventbuyedData {
  title: string;
  ticket_price: number;
  token_price: number;
  collab: number;
  total: number;
}

export const databuyedTest: EventbuyedData[] = [
  {
    title: 'Mi primer evento en Solana',
    ticket_price: 0.01,
    token_price: 0.1,
    collab: 2,
    total: 0.2,
  },
  {
    title: '#HeavyDutyCamp v3',
    ticket_price: 0.05,
    token_price: 0.12,
    collab: 3,
    total: 0.3,
  },
];
