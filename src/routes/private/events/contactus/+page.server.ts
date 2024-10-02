import { supabase } from '$lib/supabaseClient';


export const actions = {
	create: async function (event) {
		let formDataObject = await event.request.formData();




        let formObject = {
			name: formDataObject.get('name'),

			email: formDataObject.get('email'),

			mobile: formDataObject.get('mobile'),

			enquire: formDataObject.get('enquire') == 'on' ? true : false,

			message: formDataObject.get('message')

        };
        
     console.log(formObject);

	 const { error } = await supabase.from('contact_us').insert(formObject);
	 console.log("Error========>",error);
	 return { status: 'success', message: 'Form Submission successfull' };

    }
}