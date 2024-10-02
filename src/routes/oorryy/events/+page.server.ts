import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
	const { session } = await safeGetSession();
	if (!session) {
		redirect(303, '/login');
	}
	// console.log('Session: ', session.user.id);

	// const { data: organizerId } = await supabase
	// 	.from('organizers')
	// 	.select(`id`)
	// 	.eq('user_id', session.user.id)
	// 	.single();

	// console.log('Organizer ID: ', organizerId?.id);

	const { data: eventsData } = await supabase
		.from('events')
		.select()
		// .eq('organizer_id', organizerId?.id);

	// console.log('Events Data: ', eventsData);

	return { session, eventsData };
};

export const actions: Actions = {
	delete: async ({ request, locals: { supabase, safeGetSession } }) => {
		const { session } = await safeGetSession();
		if (!session) {
			return;
		}
		const formData = await request.formData();
		console.log('Form Data: ', formData);
		const eventId = formData.get('eventId') as string;
		console.log('Delete Action Celled with Event ID: ', eventId);
	}
};
