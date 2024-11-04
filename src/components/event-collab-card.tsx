import Image from 'next/image';
import { EventCollabData as EventCardProp } from '@/app/utils/event-collab-data';

export default function EventcollabCard(event: EventCardProp) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-indigo-100">
      <h4 className="font-bold mb-4 text-inherit text-center">{event.title}</h4>
      <p className="font-bold text-sm text-inherit text-center">
        Colaboraste con: {event.collab} tokens
      </p>
      <div className="flex gap-6 justify-center py-2">
        <button
          className="bg-red-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400 text-xs"
          onClick={() => alert('Próximamente')}
        >
          Retirar Ganancias
        </button>
      </div>
    </div>
  );
}
