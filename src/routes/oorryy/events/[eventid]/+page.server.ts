import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, safeGetSession }, params }) => {
    const { session } = await safeGetSession();
	if (!session) {
		redirect(303, '/login');
	}
	// console.log('Session: ', session.user.id);

	// console.log('Passed Params: ', params);
	console.log('Passed Params id: ', params.eventid);

	// const { passedEventId } = params.eventid;
	// console.log('Passed Event ID: ', passedEventId);

    // const { data: organizerId } = await supabase
    // .from('organizers')
    // .select(`id`)
    // .eq('user_id', session.user.id)
    // .single();

// console.log('Organizer ID: ', organizerId?.id);

// const { data: eventsData, error: eventsDataError } = await supabase
//     .from('events')
//     .select()
//     .eq('event_id', params.eventid);

// console.log('Events Data: ', eventsData);
// console.log('Events Data Error: ', eventsDataError);

// return { session, eventsData };
}) satisfies PageServerLoad;