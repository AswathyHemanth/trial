<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { PageData } from './$types';
	import DataTable from './data-table.svelte';

	export let data: PageData;
</script>

<headear class="m-4 flex flex-row items-center justify-between">
	<h1 class=" text-4xl font-bold">All Events</h1>
	<Button href="./events/create">Create Event</Button>
</headear>

<main>
	<div class="container mx-auto py-10">
		<DataTable data={data.eventsData} />
	</div>
</main>
