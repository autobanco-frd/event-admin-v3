'use client';
import EventcollabCard from '@/components/event-collab-card';
import { datacollabTest } from '@/app/utils/event-collab-data';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useWallet } from "@solana/wallet-adapter-react"

export default function MyEvents() {
  const { publicKey } = useWallet()
  if(!publicKey){
    return redirect('/')
  }
  return (
    
    <div>
      <>
        {' '}
        {datacollabTest.length == 0 && (
          <div className="my-16 flex flex-col items-center">
            <h1 className="text-4xl text-center font-bold">
              Parece que aún no has colaborado con ningún evento
            </h1>
            <h3 className="text-2xl text-center mt-5 mb font-bold">
              ¡Explora los últimos eventos en Solana y participa como
              colaborador!
            </h3>
            <Link
              href="/"
              className="bg-indigo-300 w-50 text-black mt-5 font-semibold px-4 py-1 rounded hover:text-white hover:bg-indigo-400"
            >
              Explorar eventos
            </Link>
          </div>
        )}
      </>
      <>
        {' '}
        {datacollabTest.length > 0 && (
          <div className="my-16 py-0">
            <h1 className="text-4xl text-center font-bold py-0">
              Tus Colaboraciones
            </h1>
            <h3 className="text-2xl text-center mt-5 mb font-bold py-0">
              Recolecta tu recompensa una vez finalizado el evento
            </h3>
          </div>
        )}
      </>
      <div className="grid gap-4 px-10 mb-10 xl:grid-cols-4 sm:grid-cols-2 py-0">
        {datacollabTest.map((event, index) => (
          <EventcollabCard
            key={index}
            title={event.title}
            collab={event.collab}
            gains={event.gains}
          />
        ))}
      </div>
    </div>
  );
}
