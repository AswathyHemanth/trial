import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';


export const actions: Actions = {
    default: async ({ request, locals: { supabase, safeGetSession } }) => {
        // console.log('Actions Triggered. Display reqeuest: ', request);
        const { session } = await safeGetSession();
        if (!session) {
            redirect(303, '/');
        }

        async function slugify(title: string) {
            return title
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters
                .replace(/\s+/g, '-') // Replace spaces with hyphens
                .replace(/-+/g, '-'); // Remove duplicate hyphens
        }

        async function createUniqueSlug(title: string) {

            let slug = await slugify(title);

            let { data, error } = await supabase
                .from('events')
                .select('title_slug')
                .eq('title_slug', slug);
            console.log('Starting the while loop');
            let count = 1;
            while (data && data.length > 0) {
                slug = `${slug}-${count}`;
                count++;
                let { data } = await supabase
                    .from('events')
                    .select('slug')
                    .eq('slug', slug);
            }
            console.log('Outside the while loop');

            if (error) {
                console.error('Error from Event Sulg Creation: ', error);
                redirect(303, '/private/events');
            }
            // console.log('Slug from the Function: ', slug);
            return slug;
        }


        const formData = await request.formData();
        const eventName = formData.get('eventName') as string;
        const description = formData.get('description') as string;
        const eventDateTime = formData.get('eventDateTime') as string;
        const location = formData.get('location') as string;
        const imageUrl = formData.get('imageUrl') as string;
        const sourceUrl = formData.get('sourceUrl') as string;

        const friendlySlug = await createUniqueSlug(eventName);
        // console.log('Slug from the Action: ', friendlySlug);



        // console.log('Event Form Data: ', formData);
        const { error } = await supabase.from('events').insert({
            title: eventName,
            description: description,
            start_date: eventDateTime,
            location: location,
            image_url: imageUrl,
            source_url: sourceUrl,
            created_by_user_id: session.user.id,
            title_slug: friendlySlug,
        });
        console.log('Event Data Inserted.');

        if (error) {
            console.error('Error from Event Data Insertion: ', error);
            redirect(303, '/private/events');
        } else {
            redirect(303, '/private/events');
        }
    },
};