import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: events } = await supabase.from('tableevents').select();

	let datatosveltepage = { events: events };
	return datatosveltepage;
}

getevent : async function (event)
  {
		let payload = await event.request.json();
		let eventId = payload.id;
		console.log(eventId);
		const { data: selectedEvent} = await supabase.from('tableevents').select().eq('id', eventId)
		 
		return {selectedEvent}
  }
