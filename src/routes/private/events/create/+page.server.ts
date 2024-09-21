import { supabase } from '$lib/supabaseClient';

export async function load() {
	//const { data } = await supabase.from("country").select();

	// let {data:cities} = await supabase.from("city").select();

	const { data: organizers } = await supabase.from('organizers').select();
	//let datatosveltepage = {"countries":data,"cities":cities};

	let datatosveltepage = { organizers: organizers };
	return datatosveltepage;
}

export const actions = {
	create: async function (event) {
		let formDataObject = await event.request.formData();
		let initials = 'P P';
		let myString = 'Hello World' + initials;

		let myString2 = `Hello World ${initials}`;

		let startDate = formDataObject.get('start_date');
		let startTime = formDataObject.get('start_time');
		let endDate = formDataObject.get('end_date');
		let endTime = formDataObject.get('end_time');

		const startDateTimeString = `${startDate}T${startTime}`;
		const localStartDate = new Date(startDateTimeString);
		const utcStartDate = new Date(
			localStartDate.getTime() - localStartDate.getTimezoneOffset() * 60000
		);

		const utcStartString = utcStartDate.toISOString();
		console.log(utcStartDate);

		const endDateTimeString = `${startDate}T${startTime}`;
		const localEndDate = new Date(endDateTimeString);
		const utcEndDate = new Date(
			localEndDate.getTime() - localEndDate.getTimezoneOffset() * 60000
		);

		const utcEndString = utcEndDate.toISOString();
		console.log(utcEndDate);

		let formObject = {
			title: formDataObject.get('title'),

			description: formDataObject.get('description'),

			start_date: utcStartString,

			end_date: utcEndString,

			location: formDataObject.get('location'),

			image_url: formDataObject.get('image_url'),

			max_attendees: formDataObject.get('max_attendees'),

			price: formDataObject.get('price'),

			is_published: formDataObject.get('is_published') == 'on' ? true : false,

			organizer_id: formDataObject.get('organizer_id')
		};
		console.log(formDataObject);
		const { error } = await supabase.from('events').insert(formObject);
		console.log('=========================>', formObject);
		return { status: 'success', message: 'Form Submission successfull' };
		console.log('AAAAAAAAAAAAAAAAASWATHHY', formObject);
	}
};
