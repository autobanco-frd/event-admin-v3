import Image from 'next/image';
import { EventbuyedData as EventCardProp } from '@/app/utils/event-buyed-data';

export default function EventbuyedCard(event: EventCardProp) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-indigo-100">
      <h4 className="font-bold mb-4 text-inherit text-center">{event.title}</h4>

      <div className="relative bg-white px-6 pb-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-sm sm:max-w-sm sm:rounded-sm sm:px-5">
        <div className="divide-y divide-gray-300/50">
          <div className="space-y-2 py-2 text-sm leading-7 text-gray-600 text-center">
            <b>Boveda del Evento</b>
          </div>
          <div className="space-y-2 py-2 text-xs leading-7 text-gray-600">
            <p className="px-1">Precio Token:&nbsp; {event.token_price}</p>
            <p className="px-1">Colaboradores:&nbsp; {event.collab}</p>
            <p className="px-1">Total:&nbsp; {event.total}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 justify-center py-2">
        <button
          className="bg-indigo-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400 text-xs"
          onClick={() => alert('Próximamente')}
        >
          Retirar Fondos
        </button>
        <button
          className="bg-red-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400 text-xs"
          onClick={() => alert('Próximamente')}
        >
          Cerrar Evento
        </button>
      </div>
    </div>
  );
}
