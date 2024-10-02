import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: events } = await supabase.from('events').select();

	let datatosveltepage = { events: events };
	return datatosveltepage;
}





export const actions = {
	updateCounter:async function (event)
  {
	let payload = await event.request.json();
	console.log("============PAYLOAD==================",payload)
	let eventId = payload.id;
	console.log(eventId,"==============updation==================");


	const { data: selectedEvent} = await supabase.from('events').update({click_counter:payload.click_counter}).eq('id', eventId)

	

  } ,
  
	
	

  delete : async function (event)
  {
		let payload = await event.request.json();
		let eventId = payload.id;
		console.log(eventId);
		const response = await supabase.from('events').delete().eq('id', eventId)
  },
  getevent : async function (event)
  {
		let payload = await event.request.json();
		let eventId = payload.id;
		console.log(eventId);
		const { data: selectedEvent} = await supabase.from('events').select().eq('id', eventId)
		 
		return {selectedEvent}
  },

  update:async function (event)
  {
	let payload = await event.request.json();
	console.log("============PAYLOAD==================",payload)
	let eventId = payload.id;
	console.log(eventId,"==============updation==================");


	const { data: selectedEvent} = await supabase.from('events').update(payload).eq('id', eventId)

	

  } 
}
