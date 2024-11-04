export interface EventData {
    title: string;
    ticket_price: number;
    token_price: number;
  }
  
  export const dataTest: EventData[] = [
    {
      title: "Mi primer evento en Solana",
      ticket_price: 0.01,
      token_price: 0.1
    },
    {
      title: "#HeavyDutyCamp v3",
      ticket_price: 0.05,
      token_price: 0.12
    },
    {
      title: "Solana Breakpoint 2025",
      ticket_price: 0.05,
      token_price: 0.1
    },
  ]
  