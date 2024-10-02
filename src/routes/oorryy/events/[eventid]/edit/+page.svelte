<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';

	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { onMount } from 'svelte';

	export let data;

	// console.log('Event Data: ', eventData);

	let eventName = data.eventData.title;

	let description = data.eventData.description ?? '';
	let eventDateTime = data.eventData.start_date ?? '';
	let location = data.eventData.location ?? '';
	let imageUrl = data.eventData.image_url ?? '';
	let sourceUrl = data.eventData.source_url ?? '';
	let isPublished = data.eventData.is_published.toString();
	console.log('Is Published: ', isPublished);
	let formattedDateTime = '';

	// Function to format date for display
	function formatForDisplay(dateString) {
		if (!dateString) return '';
		const date = new Date(dateString);
		return date
			.toLocaleString('en-GB', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				hour12: true
			})
			.replace(',', '');
	}

	// Function to format date for input field
	function formatForInput(dateString) {
		if (!dateString) return '';
		const date = new Date(dateString);
		return date.toISOString().slice(0, 16);
	}

	// Update formattedDateTime when eventDateTime changes
	$: {
		formattedDateTime = formatForInput(eventDateTime);
		console.log('formattedDateTime after getting data form DB: ', formattedDateTime);
	}

	// onMount(() => {
	// 	// Simulating data fetch from database
	// 	const dbTimestamp = '2024-09-17T13:00:00+00:00';
	// 	eventDateTime = dbTimestamp;
	// });
</script>

<div class="mx-auto max-w-md py-8">
	<h2 class="mb-6 text-center text-2xl font-bold">Edit Event</h2>
	<form method="POST" class="space-y-6">
		<input type="hidden" name="eventid" />
		<div class="space-y-2">
			<Label>Event Name / Title *</Label>
			<Input name="eventName" placeholder="Enter event name" required bind:value={eventName} />
		</div>
		<div class="space-y-2">
			<Label>Description *</Label>
			<Textarea
				name="description"
				placeholder="Enter event description"
				required
				bind:value={description}
			/>
		</div>

		<div class="space-y-2">
			<Label>Event Date and Time (Start) *</Label>
			<Input
				name="eventDateTime"
				type="datetime-local"
				required
				on:input={(e) => (eventDateTime = e.target.value)}
			/>
			{#if eventDateTime}
				<p>Date & Time: {formatForDisplay(eventDateTime)}</p>
			{/if}
		</div>

		<div class="space-y-2">
			<Label>Location *</Label>
			<Input name="location" placeholder="Enter event location" required bind:value={location} />
		</div>

		<div class="space-y-2">
			<Label>Banner Image URL *</Label>
			<Input
				name="imageUrl"
				placeholder="https://example.com/image.jpg"
				required
				bind:value={imageUrl}
			/>
		</div>
		<div class="space-y-2">
			<Label>Source URL *</Label>
			<Input name="sourceUrl" placeholder="https://example.com" required bind:value={sourceUrl} />
		</div>
		<div class="space-y-2">
			<Label>Published</Label>
			<select
				name="isPublished"
				bind:value={isPublished}
				on:change={(e) => e.target.form.requestSubmit()}
			>
				<option value="true">Yes</option>
				<option value="false">No</option>
			</select>
		</div>

		<Button type="submit" formaction="?/update" class="w-full">Edit Event</Button>
		<Button type="submit" formaction="?/delete" class="w-full bg-destructive">Delete Event</Button>
	</form>
</div>

<!-- <pre>
	{JSON.stringify(data, null, 2)}
</pre> -->
