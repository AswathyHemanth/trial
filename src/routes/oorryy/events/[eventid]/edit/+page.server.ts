import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, safeGetSession }, params }) => {

	const { session } = await safeGetSession();
	if (!session) {
		redirect(303, '/login');
	}

	// console.log('Passed Params id (FROM EDIT PAGE): ', params.eventid);

	const { data: eventData, error: evnetDataError } = await supabase
		.from('events')
		.select(`title, description, start_date, location, image_url, source_url, is_published`)
		.eq('id', params.eventid)
		.single();

	if (evnetDataError) {
		console.error(evnetDataError);
	}

	return { session, eventData };
}) satisfies PageServerLoad;




export const actions: Actions = {
	update: async ({ request, locals: { supabase, safeGetSession, }, params }) => {

		console.log('Params from Update Action: ', params);
		const { session } = await safeGetSession();
		if (!session) {
			redirect(303, '/');
		}


		const formData = await request.formData();
		const eventName = formData.get('eventName') as string;
		console.log('Event Name: ', eventName);
		const description = formData.get('description') as string;
		const eventDateTime = formData.get('eventDateTime') as string;
		const location = formData.get('location') as string;
		const imageUrl = formData.get('imageUrl') as string;
		const sourceUrl = formData.get('sourceUrl') as string;
		const isPublished = formData.get('isPublished') as string;


		// console.log('Event Form Data: ', formData);
		const { error: updatedDataError } = await supabase.from('events').update({
			title: eventName,
			description: description,
			start_date: eventDateTime,
			location: location,
			image_url: imageUrl,
			source_url: sourceUrl,
			is_published: isPublished,
		}).eq('id', params.eventid).eq('created_by_user_id', session.user.id)

		if (updatedDataError) {
			console.log('Error updating event: ', updatedDataError);
		}

	},

	delete: async ({ request, locals: { supabase, safeGetSession, }, params }) => {

		// console.log('Params from Update Action: ', params);
		const { session } = await safeGetSession();
		if (!session) {
			redirect(303, '/');
		}


		// const formData = await request.formData();
		// const ev = formData.get('eventName') as string;


		// console.log('Event Form Data: ', formData);
		const { error: deleteDataError } = await supabase
			.from('events')
			.delete()
			.eq('id', params.eventid)
			.eq('created_by_user_id', session.user.id)

		if (deleteDataError) {
			console.log('Error deleting event: ', deleteDataError);
		}
		redirect(303, '/private/events');

	}
}

